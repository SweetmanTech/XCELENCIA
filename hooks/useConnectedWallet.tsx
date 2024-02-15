import { useWallets } from "@privy-io/react-auth"

const useConnectedWallet = () => {
  const { wallets } = useWallets()
  const privyWallet = wallets?.find((wallet) => wallet.walletClientType === "privy")
  const externalWallet = wallets?.find((wallet) => wallet.walletClientType !== "privy")
  const connectedWallet = externalWallet?.address || privyWallet?.address

  return { connectedWallet, privyWallet, externalWallet }
}

export default useConnectedWallet
