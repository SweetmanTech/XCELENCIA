import { Interface } from "ethers/lib/utils"
import zoraAbi from "@/lib/abi/zora-erc721-drop.json"
import { DROP_ADDRESS, MINT_REFERRAL_ADDRESS } from "./consts"

const getZoraMintCall = (mintRecipient, mintQuantity, totalPrice) => {
  const comment = "XCELENCIA - ERC6551 smart album 🪄"
  const zoraMintData = new Interface(zoraAbi).encodeFunctionData("mintWithRewards", [
    mintRecipient,
    mintQuantity,
    comment,
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
