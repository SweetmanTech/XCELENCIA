import { encodeFunctionData, erc721Abi } from "viem"
import { DROP_ADDRESS } from "./consts"

const getOwnerOfCall = (tokenId) => {
  const ownerOfData = encodeFunctionData({
    abi: erc721Abi,
    functionName: "ownerOf",
    args: [tokenId],
  })
  return {
    target: DROP_ADDRESS,
    value: 0,
    allowFailure: false,
    callData: ownerOfData,
  }
}

export default getOwnerOfCall
