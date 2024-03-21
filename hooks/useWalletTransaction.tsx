import { BigNumber, Contract } from "ethers"
import useConnectedWallet from "./useConnectedWallet"
import { CHAIN_ID } from "@/lib/consts"
import usePrivyEthersSigner from "./usePrivyEthersSigner"

const useWalletTransaction = () => {
  const { metamaskWallet } = useConnectedWallet()
  const { signer } = usePrivyEthersSigner()

  const sendTransaction = async (
    to,
    chainId: any,
    abi: any,
    functionName: string,
    args,
    value = BigNumber.from("0").toHexString(),
    gasLimit = 0,
  ) => {
    try {
      const privyChainId = metamaskWallet.chainId
      if (privyChainId !== `eip155:${chainId}`) {
        await metamaskWallet.switchChain(CHAIN_ID)
        return
      }
      const contract = new Contract(to, abi, signer)
      if (signer) {
        const data = {
          value,
        } as any
        if (gasLimit) {
          data.gasLimit = gasLimit
        }
        const tx = await contract[functionName](args, data)
        const txHash = tx.wait()
        return txHash
      }
      return { error: true }
    } catch (error) {
      return { error }
    }
  }

  return {
    sendTransaction,
  }
}

export default useWalletTransaction
