import { erc20Abi, erc721Abi } from "viem"
import { getPublicClient } from "./clients"
import { CHAIN_ID } from "./consts"

const getBalanceOf = async (dropAddress, owner) => {
  try {
    console.log("SWEETS getBalanceOf", dropAddress)
    console.log("SWEETS getBalanceOf", owner)
    const publicClient = getPublicClient(CHAIN_ID)
    console.log("SWEETS publicClient", publicClient)
    const balanceOf = await publicClient.readContract({
      address: dropAddress as `0x${string}`,
      abi: erc721Abi,
      functionName: "balanceOf",
      args: [owner],
    })
    return parseInt(balanceOf.toString(), 10)
  } catch (error) {
    return { error }
  }
}

export default getBalanceOf
