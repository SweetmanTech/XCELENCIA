import { usePrivy } from "@privy-io/react-auth"
import { CHAIN_ID } from "@/lib/consts"
import useConnectedWallet from "./useConnectedWallet"

const usePreparePrivyWallet = () => {
  const { ready, login } = usePrivy()
  const { wallet, connectedWallet } = useConnectedWallet()

  const prepare = async () => {
    if (ready && !connectedWallet) {
      login()
      return false
    }
    const privyChainId = wallet.chainId
    if (privyChainId !== `eip155:${CHAIN_ID}`) {
      await wallet.switchChain(CHAIN_ID)
      return false
    }
    return true
  }

  return { prepare }
}

export default usePreparePrivyWallet
