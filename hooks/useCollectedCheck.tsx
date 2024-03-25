import { CHAIN_ID, DROP_ADDRESS, SOUNDXYZ_CHAIN, SPOTIFY_DROP_ADDRESS } from "@/lib/consts"
import { useUserProvider } from "@/providers/UserProvider"
import { useCallback, useEffect, useState } from "react"
import useConnectedWallet from "./useConnectedWallet"
import getBalanceOf from "@/lib/getBalanceOf"

const useCollectedCheck = () => {
  const [isCollectedOnZora, setIsCollectedOnZora] = useState(false)
  const { isLoggedByEmail } = useUserProvider()
  const { connectedWallet, externalWallet } = useConnectedWallet()
  const [isCollectedSoundXYZ, setIsCollectedSoundXYZ] = useState(false)

  const collectedCheck = useCallback(async () => {
    if (!isLoggedByEmail && !connectedWallet && !externalWallet?.address) return

    const walletAddress = isLoggedByEmail ? connectedWallet : externalWallet?.address

    const dropsOnZora = await getBalanceOf(walletAddress, CHAIN_ID, DROP_ADDRESS)
    if (dropsOnZora > 0) setIsCollectedOnZora(true)

    const dropsOnSoundXYZ = await getBalanceOf(
      walletAddress,
      SOUNDXYZ_CHAIN.id,
      SPOTIFY_DROP_ADDRESS,
    )
    if (dropsOnSoundXYZ) setIsCollectedSoundXYZ(true)
  }, [isLoggedByEmail, connectedWallet, externalWallet])

  useEffect(() => {
    collectedCheck()
  }, [collectedCheck])

  return {
    isCollectedOnZora,
    isCollectedSoundXYZ,
    collectedCheck,
  }
}

export default useCollectedCheck
