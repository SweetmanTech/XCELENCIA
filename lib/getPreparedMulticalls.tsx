import { BigNumber } from "ethers"
import { CATALOG_PRICE, DROP_ADDRESS, ZORA_PRICE } from "./consts"
import getCosignMintCall from "./getCosignMintCall"
import getAccount from "./tokenbound/getAccount"
import getTBAInitializeCall from "./getTBAInitializeCall"
import getZoraNextTokenId from "./getZoraNextTokenId"
import getMintMulticallCalls from "./getMintMulticallCalls"
import getZoraMintVideoCall from "./getZoraMintVideoCall"
import getAllSoundCalls from "./sound/getAllSoundCalls"
import getZoraMintENEExperienceCall from "./getZoraMintENEExperienceCall"

const getPreparedMulticalls = async (signingAddress: `0x${string}`) => {
  const zoraPrice = BigNumber.from(ZORA_PRICE)
  const zoraNextTokenId = await getZoraNextTokenId(DROP_ADDRESS)
  const zoraQuantity = 1
  const tbaCalls = getMintMulticallCalls(
    signingAddress,
    zoraNextTokenId,
    zoraQuantity,
    zoraPrice.toString(),
  ) as any

  const tba = getAccount(zoraNextTokenId)

  const tbaInitializationCall = getTBAInitializeCall(tba)
  const soundRaw = await getAllSoundCalls(tba, signingAddress)
  if (!soundRaw) {
    return false
  }
  const { calls: soundCalls, value: soundValue } = soundRaw
  const soundMintCallValue = BigNumber.from(soundValue)
  const cosignMintCall = getCosignMintCall(tba)
  const zoraMintVideoCall = getZoraMintVideoCall(tba)
  const zoraMintCollageCall = getZoraMintENEExperienceCall(tba, 2)
  const zoraMintBookletCall = getZoraMintENEExperienceCall(tba, 1)

  const cosignMintValue = BigNumber.from(CATALOG_PRICE)
  const zoraMintVideoValue = BigNumber.from(zoraMintVideoCall.value)
  const zoraMintCollageValue = BigNumber.from(zoraMintCollageCall.value)
  const zoraMintBookletValue = BigNumber.from(zoraMintBookletCall.value)

  const totalPrice = zoraPrice
    .add(cosignMintValue)
    .add(zoraMintVideoValue)
    .add(zoraMintCollageValue)
    .add(zoraMintBookletValue)
    .add(soundMintCallValue)
  const hexValue = totalPrice.toHexString()
  const calls = [
    ...tbaCalls,
    tbaInitializationCall,
    ...soundCalls,
    cosignMintCall,
    zoraMintCollageCall,
    zoraMintBookletCall,
    zoraMintVideoCall,
  ]
  const response = { hexValue, calls }
  return response
}

export default getPreparedMulticalls
