import erc721Abi from "@/lib/abi/zora-erc721-drop.json"
import { getPublicClient } from "./clients"

const getBalanceOf = async (owner, chainId, dropAddress) => {
  const publicClient = await getPublicClient(chainId)
  const dropCount = await publicClient.readContract({
    address: dropAddress as `0x${string}`,
    abi: erc721Abi,
    functionName: "balanceOf",
    args: [owner],
  })

  return parseInt(dropCount.toString(), 10)
}

export default getBalanceOf
