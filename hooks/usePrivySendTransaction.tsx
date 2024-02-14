import { BigNumber } from "ethers"
import { UnsignedTransactionRequest, useWallets } from "@privy-io/react-auth"
import { Interface } from "ethers/lib/utils"

const usePrivySendTransaction = () => {
  const { wallets } = useWallets()

  const sendTransaction = async (
    to,
    chainId,
    abi,
    functionName,
    args,
    value = BigNumber.from("0").toHexString(),
    gasLimit = null,
  ) => {
    const provider = await wallets[0]?.getEthersProvider()
    const signer = await provider?.getSigner()

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
