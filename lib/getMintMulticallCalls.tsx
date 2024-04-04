import { DROP_ADDRESS } from "@/lib/consts"
import getRegistryEncodedData from "./getRegistryEncodedData"
import getRegistryCall from "./getRegistryCall"
import getZoraMintCall from "./getZoraMintCall"

const getMintMulticallCalls = (
  zoraNextTokenId: string,
  zoraQuantity: number,
  zoraTotalPrice: string,
) => {
  const zoraCreateAccountData = getRegistryEncodedData(DROP_ADDRESS, zoraNextTokenId)
  const zoraRegistryCall = getRegistryCall(zoraCreateAccountData)
  const zoraMintCall = getZoraMintCall(zoraQuantity, zoraTotalPrice)

  const calls = [zoraMintCall, zoraRegistryCall]
  return calls
}

export default getMintMulticallCalls
