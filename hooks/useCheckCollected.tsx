import { useCallback, useEffect, useState } from "react"
import useConnectedWallet from "./useConnectedWallet"
import getBalanceOf from "@/lib/getBalanceOf"
import { DROP_ADDRESS } from "@/lib/consts"

const useCheckCollected = () => {
  const [isCollectedZora, setIsCollectedZora] = useState(false)
  const { connectedWallet } = useConnectedWallet()

  const checkCollected = useCallback(async () => {
    if (!connectedWallet) return
    const zoraTotalOwned = (await getBalanceOf(DROP_ADDRESS, connectedWallet)) as any
    const { error: zoraError } = zoraTotalOwned
    if (!zoraError && zoraTotalOwned >= 1) setIsCollectedZora(true)
  }, [])

  useEffect(() => {
    checkCollected()
  }, [checkCollected])

  return {
    isCollectedZora,
    checkCollected,
  }
}

export default useCheckCollected