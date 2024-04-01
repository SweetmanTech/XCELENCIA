import { BigNumber } from "ethers"
import { useState } from "react"
import { sepolia } from "viem/chains"
import multicallAbi from "@/lib/abi/multicall3.json"
import getMintMulticallCalls from "@/lib/getMintMulticallCalls"
import {
  CATALOG_PRICE,
  CHAIN_ID,
  MULTICALL3_ADDRESS,
  SOUND_SEPOLIA_DROP_ADDRESS,
  SPOTIFY_DROP_ADDRESS,
  ZORA_PRICE,
} from "@/lib/consts"
import handleTxError from "@/lib/handleTxError"
import { useUserProvider } from "@/providers/UserProvider"
import getZoraNextTokenId from "@/lib/getZoraNextTokenId"
import getAccount from "@/lib/tokenbound/getAccount"
import getCosignMintCall from "@/lib/getCosignMintCall"
import getTBAInitializeCall from "@/lib/getTBAInitializeCall"
import getSoundBridgeTx from "@/lib/getSoundBridgeTx"
import getSoundMintCall from "@/lib/sound/getSoundMintCall"
import useConnectedWallet from "./useConnectedWallet"
import usePrivySendTransaction from "./usePrivySendTransaction"
import useWalletTransaction from "./useWalletTransaction"
import usePreparePrivyWallet from "./usePreparePrivyWallet"

const useTBAPurchase = () => {
  const { connectedWallet } = useConnectedWallet()
  const { sendTransaction: sendTxByPrivy } = usePrivySendTransaction()
  const { sendTransaction: sendTxByWallet } = useWalletTransaction()
  const [loading, setLoading] = useState(false)
  const { isLoggedByEmail } = useUserProvider()
  const { prepare } = usePreparePrivyWallet()

  const purchase = async () => {
    try {
      if (!prepare()) return false
      if (!connectedWallet) return false

      setLoading(true)
      const zoraTotalPrice = BigNumber.from(ZORA_PRICE).mul(1)
      const zoraNextTokenId = await getZoraNextTokenId()
      const zoraQuantity = 1
      const tbaCalls = getMintMulticallCalls(
        zoraNextTokenId,
        connectedWallet as string,
        zoraQuantity,
        zoraTotalPrice.toString(),
      ) as any
      const tba = getAccount(zoraNextTokenId)
      const tbaInitializationCall = getTBAInitializeCall(tba)
      const soundMintCall = await getSoundMintCall(tba, CHAIN_ID, SPOTIFY_DROP_ADDRESS)
      const soundSepoliaMintCall = (await getSoundMintCall(
        tba,
        sepolia.id,
        SOUND_SEPOLIA_DROP_ADDRESS,
      )) as any

      if (!soundMintCall) {
        setLoading(false)
        return false
      }

      const bridgeCalls = await getSoundBridgeTx({
        destinationChainId: sepolia.id,
        originChainId: CHAIN_ID,
        user: connectedWallet,
        txs: [
          {
            to: soundSepoliaMintCall.target,
            data: soundSepoliaMintCall.callData,
            value: soundSepoliaMintCall.value.toString(),
          },
        ],
      })
      console.log("SWEETS soundMintCall", soundMintCall)
      console.log("SWEETS bridgeCall same as soundMintCall?", bridgeCalls)

      const soundMintCallValue = BigNumber.from(soundMintCall.value)
      const cosignMintCall = getCosignMintCall(tba)
      const cosignMintValue = BigNumber.from(CATALOG_PRICE)
      const soundBridgeValue = BigNumber.from(bridgeCalls.value)
      const totalPrice = soundMintCallValue
        .add(cosignMintValue)
        .add(zoraTotalPrice)
        .add(soundBridgeValue)
      const hexValue = totalPrice.toHexString()
      const calls = [...tbaCalls, tbaInitializationCall, soundMintCall, cosignMintCall, bridgeCalls]

      if (isLoggedByEmail) {
        const response = await sendTxByPrivy(
          MULTICALL3_ADDRESS,
          CHAIN_ID,
          multicallAbi,
          "aggregate3Value",
          calls,
          hexValue,
          "Collect the Album",
          "El Nino Estrello",
        )
        setLoading(false)
        return response
      }

      const response = await sendTxByWallet(
        MULTICALL3_ADDRESS,
        CHAIN_ID,
        multicallAbi,
        "aggregate3Value",
        calls,
        hexValue,
      )
      setLoading(false)
      return response
    } catch (err) {
      setLoading(false)
      handleTxError(err)
      return { error: err }
    }
  }

  return { purchase, loading }
}

export default useTBAPurchase
