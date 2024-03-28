import cosignAbi from "@/lib/abi/catalog-cosign.json"
import { getPublicClient } from "./clients"
import { CATALOGCOSIGN_ADDRESS, CHAIN_ID } from "./consts"

const getCosignPrice = async () => {
  const publicClient = getPublicClient(CHAIN_ID)
  const tokenPrice = await publicClient.readContract({
    address: CATALOGCOSIGN_ADDRESS as `0x${string}`,
    abi: cosignAbi,
    functionName: "tokenPrice",
  })

  return tokenPrice
}

export default getCosignPrice
