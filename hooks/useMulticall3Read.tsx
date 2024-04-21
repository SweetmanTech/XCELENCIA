import { CHAIN_ID, MULTICALL3_ADDRESS } from "@/lib/consts"
import abi from "@/lib/abi/multicall3.json"
import { getPublicClient } from "@/lib/clients"

const useMulticall3Read = () => {
  const aggregate3Value = async (calls: any[]) => {
    try {
      const tx = await getPublicClient(CHAIN_ID).readContract({
        address: MULTICALL3_ADDRESS,
        abi,
        functionName: "aggregate3Value",
        args: [calls],
      })
      return tx
    } catch (err) {
      return { err }
    }
  }

  return { aggregate3Value }
}

export default useMulticall3Read
