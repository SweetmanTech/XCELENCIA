import { BigNumber } from "ethers"
import { numberToHex } from "viem"
import { useState } from "react"
import multicallAbi from "@/lib/abi/multicall3.json"
import getMintMulticallCalls from "@/lib/getMintMulticallCalls"
import { CHAIN_ID, MULTICALL3_ADDRESS, ZORA_PRICE, SOUND_PRICE } from "@/lib/consts"
import useConnectedWallet from "./useConnectedWallet"
import usePrivySendTransaction from "./usePrivySendTransaction"
import useWalletTransaction from "./useWalletTransaction"
import handleTxError from "@/lib/handleTxError"
import { useUserProvider } from "@/providers/UserProvider"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import getZoraNextTokenId from "@/lib/getZoraNextTokenId"
import getSoundMintCall from "@/lib/getSoundMintCall"

const useTBAPurchase = () => {
  const { connectedWallet } = useConnectedWallet()
  const { sendTransaction: sendTxByPrivy } = usePrivySendTransaction()
  const { sendTransaction: sendTxByWallet } = useWalletTransaction()
  const [loading, setLoading] = useState(false)
  const { isLoggedByEmail } = useUserProvider()
  const { prepare } = usePreparePrivyWallet()

  const purchase = async (zoraQuantity: number, soundQuantity: number) => {
    try {
      if (!prepare()) return
      if (!connectedWallet) return

      setLoading(true)
      const zoraTotalPrice = BigNumber.from(ZORA_PRICE).mul(1)
      const soundTotalPrice = BigNumber.from(SOUND_PRICE).mul(1)
      console.log("SWEETS soundTotalPrice", soundTotalPrice)
      const totalPrice = zoraTotalPrice.add(soundTotalPrice)
      const zoraNextTokenId = await getZoraNextTokenId()
      const calls = getMintMulticallCalls(
        zoraNextTokenId,
        connectedWallet as string,
        zoraQuantity,
        zoraTotalPrice.toString(),
      ) as any
      console.log("SWEETS CALLS", calls)
      const soundMintCall = await getSoundMintCall(connectedWallet, soundQuantity, soundTotalPrice)
      console.log("SWEETS soundMintCall", soundMintCall)

      console.log("SWEETS totalPrice", totalPrice)

      const hexValue = totalPrice.toHexString()
      console.log("SWEETS totalPrice", hexValue)

      // if (isLoggedByEmail) {
      //   const response = await sendTxByPrivy(
      //     MULTICALL3_ADDRESS,
      //     CHAIN_ID,
      //     multicallAbi,
      //     "aggregate3Value",
      //     [calls, soundMintCall],
      //     hexValue,
      //     "Collect the Album",
      //     "El Nino Estrello",
      //   )
      //   setLoading(false)
      //   return response
      // }

      const response = await sendTxByWallet(
        MULTICALL3_ADDRESS,
        CHAIN_ID,
        multicallAbi,
        "aggregate3Value",
        [...calls, soundMintCall],
        hexValue,
      )
      setLoading(false)
      return response
    } catch (err) {
      setLoading(false)
      // eslint-disable-next-line no-console
      console.error(err, "ZIAD")
      handleTxError(err)
      return { error: err }
    }
  }

  return { purchase, loading }
}

export default useTBAPurchase
