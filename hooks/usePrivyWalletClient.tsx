import { CHAIN } from "@/lib/consts"
import { useEffect, useState } from "react"
import { Chain, WalletClient, createWalletClient, custom } from "viem"
import {
  editionV1PublicActions,
  editionV2PublicActionsCreate,
  editionV2PublicActionsInfo,
  editionV2PublicActionsMint,
  editionV2WalletActionsMint,
  soundEditionVersionPublicActions,
} from "@soundxyz/sdk"
import useConnectedWallet from "./useConnectedWallet"

const usePrivyWalletClient = () => {
  const { externalWallet } = useConnectedWallet()
  const wallet = externalWallet // Replace this with your desired wallet
  const [walletClient, setWalletClient] = useState<WalletClient | null>(null)

  useEffect(() => {
    const init = async () => {
      const provider = await wallet.getEthereumProvider()
      const response = createWalletClient({
        chain: CHAIN as Chain,
        account: wallet.address as `0x${string}`,
        transport: custom(provider),
      })
        // Minting functions
        .extend(editionV2WalletActionsMint)
      setWalletClient(response)
    }

    if (!wallet) return
    init()
  }, [wallet])

  return { walletClient }
}

export default usePrivyWalletClient
