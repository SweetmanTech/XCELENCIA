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
  ) => {
    try {
      const privyChainId = metamaskWallet.chainId
      if (chainId !== parseInt(privyChainId, 10)) {
        metamaskWallet.switchChain(CHAIN_ID)
      }

      const contract = new Contract(to, abi, signer)
      if (signer) {
        const txReceipt = await contract[functionName](args, {
          gasLimit: 30000,
          value,
        })
        return txReceipt.transactionHash
      }
    } catch (error) {
      console.log("ZIAD HERE", error)
      return { error }
    }
  }

  return {
    sendTransaction,
  }
}

export default useWalletTransaction
