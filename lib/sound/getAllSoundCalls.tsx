import { CHAIN_ID, SPOTIFY_DROP_ADDRESS } from "../consts"
import getSoundInterstellarMintCall from "./getSoundInterstellarMintCall"
import getSoundMintCall from "./getSoundMintCall"

const getAllSoundCalls = async (recipient, signingAddress) => {
  const soundMintCall = await getSoundMintCall(recipient, CHAIN_ID, SPOTIFY_DROP_ADDRESS)
  if (!soundMintCall) {
    return false
  }
  const interstellarMintCall = await getSoundInterstellarMintCall(recipient, signingAddress)
  if (!soundMintCall) {
    return false
  }
  return {
    value: BigInt(soundMintCall.value) + BigInt(interstellarMintCall.value),
    calls: [soundMintCall, interstellarMintCall],
  }
}

export default getAllSoundCalls
