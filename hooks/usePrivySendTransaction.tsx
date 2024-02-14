import { BigNumber } from "ethers"
import { UnsignedTransactionRequest, useWallets } from "@privy-io/react-auth"
import { Interface } from "ethers/lib/utils"
import useConnectedWallet from "./useConnectedWallet"

const usePrivySendTransaction = () => {
  const { metamaskWallet, privyWallet } = useConnectedWallet()

  const sendTransaction = async (
    to,
    chainId,
    abi,
    functionName,
    args,
    value = BigNumber.from("0").toHexString(),
    gasLimit = null,
  ) => {
    const wallet = metamaskWallet || privyWallet
    const provider = await wallet?.getEthersProvider()
    const signer = provider?.getSigner()

    const data = new Interface(abi).encodeFunctionData(functionName, args)
    const unsignedTx = {
      to,
      chainId,
      data,
      value,
    } as UnsignedTransactionRequest
    if (gasLimit) {
      unsignedTx.gasLimit = gasLimit
    }

    const txReceipt = await signer.sendTransaction(unsignedTx)
    return txReceipt
  }

  return {
    sendTransaction,
  }
}

export default usePrivySendTransaction
