import { useEffect, useState } from "react"
import multicallAbi from "@/lib/abi/multicall3.json"
import { CHAIN_ID, MULTICALL3_ADDRESS } from "@/lib/consts"
import handleTxError from "@/lib/handleTxError"
import { useUserProvider } from "@/providers/UserProvider"
import getPreparedMulticalls from "@/lib/getPreparedMulticalls"
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
  const [preparedMulticalls, setPreparedMulticalls] = useState(null)

  useEffect(() => {
    const init = async () => {
      const prepared = await getPreparedMulticalls(connectedWallet as `0x${string}`)
      setPreparedMulticalls(prepared)
    }

    if (!connectedWallet) return
    init()
  }, [connectedWallet])

  const purchase = async () => {
    try {
      if (!(await prepare())) return false
      if (!connectedWallet) return false
      if (!preparedMulticalls) return false

      setLoading(true)
      const { calls, hexValue } = preparedMulticalls

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
      handleTxError(err)
      return { error: err }
    }
  }

  return { purchase, loading, preparedMulticalls }
}

export default useTBAPurchase
