import { createPublicClient, http } from "viem"
import { baseSepolia } from "viem/chains"

export const baseSepoliaPublicClient = createPublicClient({
  chain: baseSepolia as any,
  transport: http(),
})
