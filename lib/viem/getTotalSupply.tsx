import { erc721Abi } from "viem"
import { baseSepoliaPublicClient } from "./publicClients"

const getTotalSupply = async (dropAddress) => {
  const response = await baseSepoliaPublicClient.readContract({
    address: dropAddress as `0x${string}`,
    abi: erc721Abi,
    functionName: "totalSupply",
  })
  return response
}

export default getTotalSupply
