import { BigNumber } from "ethers"
import { numberToHex } from "viem"
import { useState } from "react"
import multicallAbi from "@/lib/abi/multicall3.json"
import getMintMulticallCalls from "@/lib/getMintMulticallCalls"
import { CHAIN_ID, MULTICALL3_ADDRESS, ZORA_PRICE, ZORA_FEE } from "@/lib/consts"
import useConnectedWallet from "./useConnectedWallet"
import usePrivySendTransaction from "./usePrivySendTransaction"
import useWalletTransaction from "./useWalletTransaction"
import handleTxError from "@/lib/handleTxError"
import { useUserProvider } from "@/providers/UserProvider"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import getZoraNextTokenId from "@/lib/getZoraNextTokenId"
import getSoundNextTokenId from "@/lib/getSoundNextTokenId"

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
      const zoraTotalPrice = BigNumber.from(ZORA_PRICE).mul(zoraQuantity)
      const soundTotalPrice = BigNumber.from("0").mul(soundQuantity).add(ZORA_FEE)
      const totalPrice = zoraTotalPrice.add(soundTotalPrice).toHexString()
      const zoraNextTokenId = await getZoraNextTokenId()
      const soundNextTokenId = await getSoundNextTokenId()
      const calls = getMintMulticallCalls(
        zoraNextTokenId,
        soundNextTokenId,
        connectedWallet as string,
        zoraQuantity,
        soundQuantity,
        zoraTotalPrice.toString(),
        soundTotalPrice.toString(),
      ) as any

      const hexValue = numberToHex(BigInt(totalPrice))
      if (isLoggedByEmail) {
        const response = await sendTxByPrivy(
          MULTICALL3_ADDRESS,
          CHAIN_ID,
          multicallAbi,
          "aggregate3Value",
          [calls],
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
      // eslint-disable-next-line no-console
      console.error(err, "ZIAD")
      handleTxError(err)
      return { error: err }
    }
  }

  return { purchase, loading }
}

export default useTBAPurchase
