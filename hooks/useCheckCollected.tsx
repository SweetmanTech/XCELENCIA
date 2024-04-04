import { useCallback, useEffect, useState } from "react"
import getBalanceOf from "@/lib/getBalanceOf"
import { DROP_ADDRESS } from "@/lib/consts"
import useConnectedWallet from "./useConnectedWallet"

const useCheckCollected = () => {
  const [isCollectedZora, setIsCollectedZora] = useState(false)
  const { connectedWallet } = useConnectedWallet()

  const checkCollected = useCallback(async () => {
    if (!connectedWallet) {
      setIsCollectedZora(false)
      return
    }
    const zoraTotalOwned = (await getBalanceOf(DROP_ADDRESS, connectedWallet)) as any
    const { error: zoraError } = zoraTotalOwned
    if (!zoraError && zoraTotalOwned >= 1) setIsCollectedZora(true)
  }, [connectedWallet])

  useEffect(() => {
    checkCollected()
  }, [checkCollected])

  return {
    isCollectedZora,
    checkCollected,
  }
}

export default useCheckCollected
