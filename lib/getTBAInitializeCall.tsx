import { Interface } from "ethers/lib/utils"
import erc6551AccountAbi from "@/lib/abi/erc6551-account.json"
import { ACCOUNT_IMPLEMENTATION } from "./consts"

const getTBAInitializeCall = async (tbaAddress) => {
  const intializeEncodedData = new Interface(erc6551AccountAbi).encodeFunctionData("initialize", [
    ACCOUNT_IMPLEMENTATION,
  ])

  return {
    target: tbaAddress,
    value: 0,
    allowFailure: false,
    callData: intializeEncodedData,
  }
}

export default getTBAInitializeCall
