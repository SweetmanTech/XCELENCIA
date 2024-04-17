import { getPublicClient } from "@/lib/clients"
import { CHAIN_ID } from "@/lib/consts"
import { useEffect, useState } from "react"
import useConnectedWallet from "./useConnectedWallet"

const useBalance = () => {
  const { connectedWallet: address } = useConnectedWallet()
  const [balance, setBalance] = useState<bigint>()

  useEffect(() => {
    const init = async () => {
      const response = await getPublicClient(CHAIN_ID).getBalance({
        address,
      })
      setBalance(response)
    }

    if (!address) return
    init()
  }, [address])

  return { balance }
}

export default useBalance
