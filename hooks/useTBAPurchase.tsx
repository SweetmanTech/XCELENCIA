import { BigNumber } from "ethers"
import { useState } from "react"
import multicallAbi from "@/lib/abi/multicall3.json"
import getMintMulticallCalls from "@/lib/getMintMulticallCalls"
import { CATALOG_PRICE, CHAIN_ID, MULTICALL3_ADDRESS, ZORA_PRICE } from "@/lib/consts"
import handleTxError from "@/lib/handleTxError"
import { useUserProvider } from "@/providers/UserProvider"
import getZoraNextTokenId from "@/lib/getZoraNextTokenId"
import getSoundMintCall from "@/lib/getSoundMintCall"
import getAccount from "@/lib/tokenbound/getAccount"
import useConnectedWallet from "./useConnectedWallet"
import usePrivySendTransaction from "./usePrivySendTransaction"
import useWalletTransaction from "./useWalletTransaction"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import getCosignMintCall from "@/lib/getCosignMintCall"
import getTBAInitializeCall from "@/lib/getTBAInitializeCall"

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
      const soundMintCall = await getSoundMintCall(tba)
      if (!soundMintCall) {
        setLoading(false)
        return false
      }
      const soundMintCallValue = BigNumber.from(soundMintCall.value)
      const cosignMintCall = await getCosignMintCall(tba)
      const cosignMintValue = BigNumber.from(CATALOG_PRICE)
      const totalPrice = soundMintCallValue.add(cosignMintValue).add(zoraTotalPrice)

      const hexValue = totalPrice.toHexString()
      const calls = [...tbaCalls, tbaInitializationCall, soundMintCall, cosignMintCall]

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
