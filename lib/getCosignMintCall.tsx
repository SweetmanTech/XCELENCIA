import { Interface } from "ethers/lib/utils"
import cosignAbi from "@/lib/abi/catalog-cosign.json"
import { BigNumber } from "ethers"
import { CATALOGCOSIGN_ADDRESS, CATALOG_ID, CATALOG_REFERRAL } from "./consts"
import getCosignPrice from "./getCosignPrice"

const getCosignMintCall = async (mintRecipient) => {
  const tokenPrice = await getCosignPrice()
  const cosignMintData = new Interface(cosignAbi).encodeFunctionData("purchaseTokenForRecipient", [
    BigNumber.from(CATALOG_ID).toString(),
    1,
    mintRecipient,
    CATALOG_REFERRAL,
    CATALOG_REFERRAL,
  ])

  return {
    target: CATALOGCOSIGN_ADDRESS,
    value: tokenPrice,
    allowFailure: false,
    callData: cosignMintData,
  }
}

export default getCosignMintCall