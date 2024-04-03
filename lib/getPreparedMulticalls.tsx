import { BigNumber } from "ethers"
import { CATALOG_PRICE, CHAIN_ID, SPOTIFY_DROP_ADDRESS, ZORA_PRICE } from "./consts"
import getCosignMintCall from "./getCosignMintCall"
import getAccount from "./tokenbound/getAccount"
import getTBAInitializeCall from "./getTBAInitializeCall"
import getSoundMintCall from "./sound/getSoundMintCall"
import getZoraNextTokenId from "./getZoraNextTokenId"
import getMintMulticallCalls from "./getMintMulticallCalls"
import getSoundInterstellarMintCall from "./sound/getSoundInterstellarMintCall"
import getZoraMintVideoCall from "./getZoraMintVideoCall"

const getPreparedMulticalls = async (signingAddress: `0x${string}`) => {
  const zoraTotalPrice = BigNumber.from(ZORA_PRICE).mul(1)
  const zoraNextTokenId = await getZoraNextTokenId()
  const zoraQuantity = 1
  const tbaCalls = getMintMulticallCalls(
    zoraNextTokenId,
    signingAddress,
    zoraQuantity,
    zoraTotalPrice.toString(),
  ) as any
  const tba = getAccount(zoraNextTokenId)
  const tbaInitializationCall = getTBAInitializeCall(tba)
  const soundMintCall = await getSoundMintCall(tba, CHAIN_ID, SPOTIFY_DROP_ADDRESS)

  if (!soundMintCall) {
    return false
  }
  const interstellarMintCall = await getSoundInterstellarMintCall(tba, signingAddress)
  const soundMintCallValue = BigNumber.from(soundMintCall.value)
  const cosignMintCall = getCosignMintCall(tba)
  const zoraMintVideoCall = getZoraMintVideoCall(tba)
  const cosignMintValue = BigNumber.from(CATALOG_PRICE)
  const zoraMintVideoValue = BigNumber.from(zoraMintVideoCall.value)
  const soundBridgeValue = BigNumber.from(interstellarMintCall.value)
  const totalPrice = soundMintCallValue
    .add(cosignMintValue)
    .add(zoraMintVideoValue)
    .add(zoraTotalPrice)
    .add(soundBridgeValue)
  const hexValue = totalPrice.toHexString()
  const calls = [
    ...tbaCalls,
    tbaInitializationCall,
    soundMintCall,
    cosignMintCall,
    zoraMintVideoCall,
    interstellarMintCall,
  ]
  const response = { hexValue, calls }
  return response
}

export default getPreparedMulticalls
