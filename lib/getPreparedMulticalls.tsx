import { BigNumber } from "ethers"
import { CATALOG_PRICE, DROP_ADDRESS, ZORA_PRICE } from "./consts"
import getCosignMintCall from "./getCosignMintCall"
import getAccount from "./tokenbound/getAccount"
import getTBAInitializeCall from "./getTBAInitializeCall"
import getZoraNextTokenId from "./getZoraNextTokenId"
import getMintMulticallCalls from "./getMintMulticallCalls"
import getZoraMintVideoCall from "./getZoraMintVideoCall"
import getAllSoundCalls from "./sound/getAllSoundCalls"
import getCollageMintCall from "./getCollageMintCall"

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

  const collageCall = getCollageMintCall(tba, zoraQuantity, zoraPrice.toString())

  const tbaInitializationCall = getTBAInitializeCall(tba)
  const soundRaw = await getAllSoundCalls(tba, signingAddress)
  if (!soundRaw) {
    return false
  }
  const { calls: soundCalls, value: soundValue } = soundRaw
  const soundMintCallValue = BigNumber.from(soundValue)
  const cosignMintCall = getCosignMintCall(tba)
  const zoraMintVideoCall = getZoraMintVideoCall(tba)
  const cosignMintValue = BigNumber.from(CATALOG_PRICE)
  const zoraMintVideoValue = BigNumber.from(zoraMintVideoCall.value)
  const totalPrice = zoraPrice
    .add(zoraPrice)
    .add(cosignMintValue)
    .add(zoraMintVideoValue)
    .add(soundMintCallValue)
  const hexValue = totalPrice.toHexString()
  const calls = [
    ...tbaCalls,
    tbaInitializationCall,
    collageCall,
    ...soundCalls,
    cosignMintCall,
    zoraMintVideoCall,
  ]
  const response = { hexValue, calls }
  return response
}

export default getPreparedMulticalls
