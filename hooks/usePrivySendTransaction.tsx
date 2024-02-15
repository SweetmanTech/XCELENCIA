import { BigNumber } from "ethers"
import { UnsignedTransactionRequest } from "@privy-io/react-auth"
import { Interface } from "ethers/lib/utils"
import useConnectedWallet from "./useConnectedWallet"

const usePrivySendTransaction = () => {
  const { externalWallet, privyWallet } = useConnectedWallet()

  const sendTransaction = async (
    to,
    chainId,
    abi,
    functionName,
    args,
    value = BigNumber.from("0").toHexString(),
    gasLimit = null,
  ) => {
    const wallet = externalWallet || privyWallet
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

    const tx = await signer.sendTransaction(unsignedTx)
    const txReceipt = await tx.wait()

    return txReceipt
  }

  return {
    sendTransaction,
  }
}

export default usePrivySendTransaction
