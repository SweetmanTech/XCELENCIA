import editionV2Abi from "@/lib/abi/sound-edition-v2.json"
import { baseSepoliaPublicClient } from "./publicClients"

const getNextTokenId = async (dropAddress) => {
  const response = await baseSepoliaPublicClient.readContract({
    address: dropAddress as `0x${string}`,
    abi: editionV2Abi,
    functionName: "nextTokenId",
  })
  return response
}

export default getNextTokenId
