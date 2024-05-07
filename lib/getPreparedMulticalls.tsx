import { BigNumber } from "ethers"
import { CATALOG_PRICE, ZORA_PRICE } from "./consts"
import getCosignMintCall from "./getCosignMintCall"
import getAccount from "./tokenbound/getAccount"
import getTBAInitializeCall from "./getTBAInitializeCall"
import getZoraNextTokenId from "./getZoraNextTokenId"
import getMintMulticallCalls from "./getMintMulticallCalls"
import getZoraMintVideoCall from "./getZoraMintVideoCall"
import getAllSoundCalls from "./sound/getAllSoundCalls"
import getZoraMintImageCall from "./getZoraMintImageCall"

const getPreparedMulticalls = async (signingAddress: `0x${string}`) => {
  const zoraTotalPrice = BigNumber.from(ZORA_PRICE)
  const zoraNextTokenId = await getZoraNextTokenId()
  const zoraQuantity = 1
  const tbaCalls = getMintMulticallCalls(
    signingAddress,
    zoraNextTokenId,
    zoraQuantity,
    zoraTotalPrice.toString(),
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
  const zoraMintImageCall = getZoraMintImageCall(tba)
  const cosignMintValue = BigNumber.from(CATALOG_PRICE)
  const zoraMintVideoValue = BigNumber.from(zoraMintVideoCall.value)
  const zoraMintImageValue = BigNumber.from(zoraMintImageCall.value)
  const totalPrice = zoraTotalPrice
    .add(cosignMintValue)
    .add(zoraMintVideoValue)
    .add(soundMintCallValue)
    .add(zoraMintImageValue)
  const hexValue = totalPrice.toHexString()
  const calls = [
    ...tbaCalls,
    tbaInitializationCall,
    ...soundCalls,
    cosignMintCall,
    zoraMintVideoCall,
    zoraMintImageCall,
  ]
  const response = { hexValue, calls }
  return response
}

export default getPreparedMulticalls
