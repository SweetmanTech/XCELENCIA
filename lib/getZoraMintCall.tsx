import { Interface } from "ethers/lib/utils"
import zoraAbi from "@/lib/abi/zora-erc721-drop.json"
import { COMMENT, DROP_ADDRESS } from "./consts"

const getZoraMintCall = (mintQuantity, totalPrice) => {
  const zoraMintData = new Interface(zoraAbi).encodeFunctionData("purchaseWithComment", [
    mintQuantity,
    COMMENT,
  ])

  return {
    target: DROP_ADDRESS,
    value: totalPrice,
    allowFailure: false,
    callData: zoraMintData,
  }
}

export default getZoraMintCall
