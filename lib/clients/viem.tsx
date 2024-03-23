import { Chain, Client, createPublicClient, http } from "viem"
import {
  editionV1PublicActions,
  editionV2PublicActionsCreate,
  editionV2PublicActionsInfo,
  editionV2PublicActionsMint,
  soundEditionVersionPublicActions,
} from "@soundxyz/sdk"
import getViemNetwork from "../viem/getViemNetwork"

export const RPC_URL = `https://base-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`

export const getPublicClient = (chainId: number) => {
  const chain = getViemNetwork(chainId)
  const publicClient = createPublicClient({
    chain: chain as Chain,
    transport: http(RPC_URL),
  })
    .extend(soundEditionVersionPublicActions)
    .extend(editionV1PublicActions as any)
    .extend(editionV2PublicActionsCreate as Client)
    .extend(editionV2PublicActionsInfo)
    .extend(editionV2PublicActionsMint)
    .extend(soundEditionVersionPublicActions)
  return publicClient
}
