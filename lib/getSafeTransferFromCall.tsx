import { Interface } from "ethers/lib/utils"
import zoraAbi from "@/lib/abi/zora-erc721-drop.json"
import { DROP_ADDRESS, MULTICALL3_ADDRESS } from "./consts"

const getSafeTransferFromCall = (recipient: `0x${string}`, tokenId: bigint) => {
  const callData = new Interface(zoraAbi).encodeFunctionData("safeTransferFrom", [
    MULTICALL3_ADDRESS,
    recipient,
    tokenId,
  ])

  return {
    target: DROP_ADDRESS,
    value: BigInt(0),
    allowFailure: false,
    callData,
  }
}

export default getSafeTransferFromCall
