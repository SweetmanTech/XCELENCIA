import { DROP_ADDRESS } from "./consts"
import getTotalSupply from "./viem/getTotalSupply"

const getZoraNextTokenId = async () => {
  const lastMinted = await getTotalSupply(DROP_ADDRESS)
  const nextTokenId = (lastMinted + BigInt(1)).toString()
  return nextTokenId
}

export default getZoraNextTokenId
