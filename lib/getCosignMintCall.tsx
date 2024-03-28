import { Interface } from "ethers/lib/utils"
import cosignAbi from "@/lib/abi/catalog-cosign.json"
import { BigNumber } from "ethers"
import { CATALOGCOSIGN_ADDRESS, CATALOG_ID } from "./consts"
import getCosignPrice from "./getCosignPrice"

const getCosignMintCall = async (mintRecipient) => {
  const tokenPrice = await getCosignPrice()
  const cosignMintData = new Interface(cosignAbi).encodeFunctionData("purchaseToken", [
    BigNumber.from(CATALOG_ID).toBigInt(),
    1,
    mintRecipient,
    mintRecipient,
  ])

  return {
    target: CATALOGCOSIGN_ADDRESS,
    value: tokenPrice,
    allowFailure: false,
    callData: cosignMintData,
  }
}

export default getCosignMintCall
