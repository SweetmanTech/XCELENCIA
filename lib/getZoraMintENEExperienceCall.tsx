import { zoraCreator1155ImplABI as abi } from "@zoralabs/protocol-deployments"
import { encodeAbiParameters, encodeFunctionData, parseAbiParameters } from "viem"
import {
  EXPERIENCE_COLLECTION_ADDRESS,
  COMMENT,
  MINT_REFERRAL_ADDRESS,
  ZORA_FIXED_PRICE_SALE_STRATEGY,
  ZORA_PRICE,
} from "./consts"

const getZoraMintENEExperienceCall = (mintRecipient, id) => {
  const tokenId = BigInt(id)
  const quantity = BigInt(1)
  const minterArguments = encodeAbiParameters(parseAbiParameters("address x, string y"), [
    mintRecipient,
    COMMENT,
  ])
  const mintData = encodeFunctionData({
    abi,
    functionName: "mintWithRewards",
    args: [
      ZORA_FIXED_PRICE_SALE_STRATEGY,
      tokenId,
      quantity,
      minterArguments,
      MINT_REFERRAL_ADDRESS,
    ],
  })

  return {
    target: EXPERIENCE_COLLECTION_ADDRESS,
    value: ZORA_PRICE,
    allowFailure: false,
    callData: mintData,
  }
}

export default getZoraMintENEExperienceCall
