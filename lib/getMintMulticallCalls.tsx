import { DROP_ADDRESS } from "@/lib/consts"
import getRegistryEncodedData from "./getRegistryEncodedData"
import getRegistryCall from "./getRegistryCall"
import getZoraMintCall from "./getZoraMintCall"
import getSafeTransferFromCall from "./getSafeTransferFromCall"

const getMintMulticallCalls = (
  recipient: `0x${string}`,
  zoraNextTokenId: string,
  zoraQuantity: number,
  zoraTotalPrice: string,
) => {
  const zoraCreateAccountData = getRegistryEncodedData(DROP_ADDRESS, zoraNextTokenId)
  const zoraRegistryCall = getRegistryCall(zoraCreateAccountData)
  const zoraMintCall = getZoraMintCall(zoraQuantity, zoraTotalPrice)
  const transferFromCall = getSafeTransferFromCall(recipient, BigInt(zoraNextTokenId))
  const calls = [zoraMintCall, zoraRegistryCall, transferFromCall]
  return calls
}

export default getMintMulticallCalls
