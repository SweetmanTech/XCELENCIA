import { DROP_ADDRESS, SPOTIFY_DROP_ADDRESS } from "@/lib/consts"
import getRegistryEncodedData from "./getRegistryEncodedData"
import getRegistryCall from "./getRegistryCall"
import getZoraMintCall from "./getZoraMintCall"
import getSoundMintCall from "./getSoundMintCall"

const getMintMulticallCalls = (
  zoraNextTokenId: string,
  soundNextTokenId: string,
  mintRecipient: string,
  zoraQuantity: number,
  soundQuantity: number,
  zoraTotalPrice: string,
  soundTotalPrice: string,
) => {
  const zoraCreateAccountData = getRegistryEncodedData(DROP_ADDRESS, zoraNextTokenId)
  const soundCreateAccountData = getRegistryEncodedData(SPOTIFY_DROP_ADDRESS, soundNextTokenId)
  const zoraRegistryCall = getRegistryCall(zoraCreateAccountData)
  const soundRegistryCall = getRegistryCall(soundCreateAccountData)
  const zoraMintCall = getZoraMintCall(mintRecipient, zoraQuantity, zoraTotalPrice)
  const soundMintCall = getSoundMintCall(mintRecipient, soundQuantity, soundTotalPrice)

  const calls = [zoraMintCall, soundMintCall, zoraRegistryCall, soundRegistryCall]
  return calls
}

export default getMintMulticallCalls
