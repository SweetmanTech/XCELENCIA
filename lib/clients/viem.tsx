import { Chain, PublicClient, createPublicClient, http } from "viem"
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
  let publicClient = createPublicClient({
    chain: chain as Chain,
    transport: http(RPC_URL),
  }) as any
  publicClient = publicClient.extend(soundEditionVersionPublicActions)
  publicClient = publicClient.extend(editionV1PublicActions)
  publicClient = publicClient.extend(editionV2PublicActionsCreate)
  publicClient = publicClient.extend(editionV2PublicActionsInfo)
  publicClient = publicClient.extend(editionV2PublicActionsMint)
  publicClient = publicClient.extend(soundEditionVersionPublicActions)
  return publicClient as PublicClient
}
