import { useEffect, useState } from "react"
import { WalletClient, createWalletClient, custom } from "viem"
import useConnectedWallet from "./useConnectedWallet"
import { editionV2WalletActionsCreate, editionV2WalletActionsMint } from "@soundxyz/sdk"

const usePrivyWalletClient = (chain) => {
  const { connectedWallet, wallet } = useConnectedWallet()
  const [walletClient, setWalletClient] = useState<WalletClient | null>(null)

  useEffect(() => {
    const init = async () => {
      const provider = await wallet.getEthereumProvider()
      const response = createWalletClient({
        chain,
        account: connectedWallet as `0x${string}`,
        transport: custom(provider),
      })
        .extend(editionV2WalletActionsCreate)
        .extend(editionV2WalletActionsMint)
      setWalletClient(response)
    }

    if (!connectedWallet || !chain) return
    init()
  }, [connectedWallet, chain])

  return { walletClient }
}

export default usePrivyWalletClient
