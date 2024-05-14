import { Interface } from "ethers/lib/utils"
import zoraAbi from "@/lib/abi/zora-erc721-drop.json"
import { COLLAGE_ADDRESS, COMMENT } from "./consts"

const getCollageMintCall = (recipient: `0x${string}`, mintQuantity: number, totalPrice: string) => {
  const zoraMintData = new Interface(zoraAbi).encodeFunctionData("purchaseWithRecipient", [
    recipient,
    mintQuantity,
    COMMENT,
  ])

  return {
    target: COLLAGE_ADDRESS,
    value: totalPrice,
    allowFailure: false,
    callData: zoraMintData,
  }
}

export default getCollageMintCall
