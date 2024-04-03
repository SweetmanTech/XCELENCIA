import { Interface } from "ethers/lib/utils"
import zoraAbi from "@/lib/abi/zora-erc721-drop.json"
import { COMMENT, DROP_ADDRESS, MINT_REFERRAL_ADDRESS } from "./consts"

const getZoraMintCall = (mintRecipient, mintQuantity, totalPrice) => {
  const zoraMintData = new Interface(zoraAbi).encodeFunctionData("mintWithRewards", [
    mintRecipient,
    mintQuantity,
    COMMENT,
    MINT_REFERRAL_ADDRESS,
  ])

  return {
    target: DROP_ADDRESS,
    value: totalPrice,
    allowFailure: false,
    callData: zoraMintData,
  }
}

export default getZoraMintCall
