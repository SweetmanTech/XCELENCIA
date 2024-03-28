import { erc20Abi } from "viem"
import { getPublicClient } from "./clients"
import { CHAIN_ID } from "./consts"

const getBalanceOf = async (dropAddress, owner) => {
  try {
    const publicClient = getPublicClient(CHAIN_ID)
    const balanceOf = await publicClient.readContract({
      address: dropAddress as `0x${string}`,
      abi: erc20Abi,
      functionName: "balanceOf",
      args: [owner],
    })
    return parseInt(balanceOf.toString(), 10)
  } catch (error) {
    return { error }
  }
}

export default getBalanceOf
