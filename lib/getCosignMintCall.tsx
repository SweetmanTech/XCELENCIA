import { Interface } from "ethers/lib/utils"
import cosignAbi from "@/lib/abi/catalog-cosign.json"
import { BigNumber } from "ethers"
import { CATALOGCOSIGN_ADDRESS, CATALOG_ID, CATALOG_PRICE, CATALOG_REFERRAL } from "./consts"

const getCosignMintCall = (mintRecipient) => {
  const cosignMintData = new Interface(cosignAbi).encodeFunctionData("purchaseTokenForRecipient", [
    BigNumber.from(CATALOG_ID).toString(),
    1,
    mintRecipient,
    CATALOG_REFERRAL,
    CATALOG_REFERRAL,
  ])

  return {
    target: CATALOGCOSIGN_ADDRESS,
    value: CATALOG_PRICE,
    allowFailure: false,
    callData: cosignMintData,
  }
}

export default getCosignMintCall
