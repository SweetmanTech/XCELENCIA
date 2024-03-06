import { erc721Abi } from "viem"
import { DROP_ADDRESS } from "../consts"
import { sepoliaPublicClient } from "./publicClients"

const getTotalSupply = async () => {
  const response = await sepoliaPublicClient.readContract({
    address: DROP_ADDRESS as `0x${string}`,
    abi: erc721Abi,
    functionName: "totalSupply",
  })
  return response
}

export default getTotalSupply
