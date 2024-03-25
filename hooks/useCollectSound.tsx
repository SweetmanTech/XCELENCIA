import { SOUNDXYZ_CHAIN, SPOTIFY_DROP_ADDRESS } from "@/lib/consts"
import useConnectedWallet from "./useConnectedWallet"
import usePrivyWalletClient from "./usePrivyWalletClient"
import { getPublicClient } from "@/lib/clients"
import { useState } from "react"

const useSoundXYZCollect = () => {
  const { walletClient } = usePrivyWalletClient(SOUNDXYZ_CHAIN)
  const { wallet, connectedWallet } = useConnectedWallet()
  const [loading, setLoaindg] = useState(false)

  const collectSoundXYZ = async () => {
    try {
      const privyChainId = wallet?.chainId
      if (privyChainId !== `eip155:${SOUNDXYZ_CHAIN.id}`) {
        await wallet?.switchChain(SOUNDXYZ_CHAIN.id)
        return
      }
      if (!connectedWallet) return

      setLoaindg(true)
      const publicClient = getPublicClient(SOUNDXYZ_CHAIN.id)
      const anyPublicClient = publicClient as any

      const mintSchedules = await anyPublicClient.editionV2.mintSchedules({
        editionAddress: SPOTIFY_DROP_ADDRESS,
      })

      const mintParams = await anyPublicClient.editionV2.mintParameters({
        account: connectedWallet,
        chain: SOUNDXYZ_CHAIN,
        schedule: mintSchedules.activeSchedules[0],
        quantity: 1,
        editionAddress: SPOTIFY_DROP_ADDRESS,
        mintTo: connectedWallet,
      })
      const anyWallet = walletClient as any
      const hash = await anyWallet.editionV2.mint(mintParams.mint)
      setLoaindg(false)
      return hash
    } catch (error) {
      setLoaindg(false)
      return { error }
    }
  }

  return {
    collectSoundXYZ,
    loading,
  }
}

export default useSoundXYZCollect
