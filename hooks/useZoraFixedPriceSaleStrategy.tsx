import { Contract } from "ethers"
import { useCallback, useMemo } from "react"
import abi from "@/lib/abi/ZoraCreatorFixedPriceSaleStrategy.json"
import { CHAIN_ID } from "@/lib/consts"
import getDefaultProvider from "@/lib/getDefaultProvider"

type UseZoraFixedPriceSaleStrategyParams = {
  saleConfig: string
  chainId?: number
}

const useZoraFixedPriceSaleStrategy = ({
  saleConfig,
  chainId = CHAIN_ID,
}: UseZoraFixedPriceSaleStrategyParams) => {
  const saleConfigContract = useMemo(
    () => saleConfig && new Contract(saleConfig, abi, getDefaultProvider(chainId)),
    [saleConfig, chainId],
  )

  const sale = useCallback(
    async (tokenContract: string, tokenId: string) => {
      try {
        if (!saleConfigContract) return false
        const response = await saleConfigContract.sale(tokenContract, tokenId)
        return response
      } catch (error) {
        return error
      }
    },
    [saleConfigContract],
  )
  return { sale }
}

export default useZoraFixedPriceSaleStrategy
