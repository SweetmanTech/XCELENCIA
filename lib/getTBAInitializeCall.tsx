import { Interface } from "ethers/lib/utils"
import erc6551AccountAbi from "@/lib/abi/erc6551-account.json"

const getTBAInitializeCall = async (tbaAddress) => {
  const intializeEncodedData = new Interface(erc6551AccountAbi).encodeFunctionData("initialize", [])

  return {
    target: tbaAddress,
    value: 0,
    allowFailure: false,
    callData: intializeEncodedData,
  }
}

export default getTBAInitializeCall
