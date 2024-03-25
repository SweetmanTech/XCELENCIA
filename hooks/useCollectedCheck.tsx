import { CHAIN_ID, DROP_ADDRESS, SOUNDXYZ_CHAIN, SPOTIFY_DROP_ADDRESS } from "@/lib/consts"
import { useCallback, useEffect, useState } from "react"
import useConnectedWallet from "./useConnectedWallet"
import getBalanceOf from "@/lib/getBalanceOf"

const useCollectedCheck = () => {
  const [isCollectedOnZora, setIsCollectedOnZora] = useState(false)
  const { connectedWallet } = useConnectedWallet()
  const [isCollectedSoundXYZ, setIsCollectedSoundXYZ] = useState(false)

  const collectedCheck = useCallback(async () => {
    if (!connectedWallet) return

    const dropsOnZora = await getBalanceOf(connectedWallet, CHAIN_ID, DROP_ADDRESS)
    if (dropsOnZora > 0) setIsCollectedOnZora(true)

    const dropsOnSoundXYZ = await getBalanceOf(
      connectedWallet,
      SOUNDXYZ_CHAIN.id,
      SPOTIFY_DROP_ADDRESS,
    )
    if (dropsOnSoundXYZ) setIsCollectedSoundXYZ(true)
  }, [connectedWallet])

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
