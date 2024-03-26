import { SPOTIFY_DROP_ADDRESS } from "./consts"
import getNextTokenId from "./viem/getNextTokenId"

const getSoundNextTokenId = async () => {
  const nextTokenId = await getNextTokenId(SPOTIFY_DROP_ADDRESS)
  return nextTokenId.toString()
}

export default getSoundNextTokenId
