import { tokenboundPublicClient } from "./client"
import { CHAIN_ID, DROP_ADDRESS } from "../consts"

const getAccount = (tokenId: string) => {
  const tokenboundAccount = tokenboundPublicClient.getAccount({
    tokenContract: DROP_ADDRESS as `0x${string}`,
    chainId: CHAIN_ID,
    tokenId,
  })

  return tokenboundAccount
}

export default getAccount
