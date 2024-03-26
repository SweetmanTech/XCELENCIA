import { TokenboundClient } from "@tokenbound/sdk"
import { getPublicClient } from "../clients"
import { CHAIN_ID } from "../consts"

const publicClient = getPublicClient(CHAIN_ID)
export const tokenboundPublicClient = new TokenboundClient({
  publicClient: publicClient as any,
  chainId: 5,
})
