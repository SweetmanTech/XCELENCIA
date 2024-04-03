import { sepolia } from "viem/chains"
import { CHAIN_ID } from "../consts"
import getSoundBridgeTx from "./getSoundBridgeTx"
import getSoundMintCall from "./getSoundMintCall"

const getSoundInterstellarMintCall = async (
  recipient: `0x${string}`,
  signingAddress: `0x${string}`,
  editionAddresses: `0x${string}`[],
) => {
  const mintCallsPromises = editionAddresses.map((editionAddress) =>
    getSoundMintCall(recipient, sepolia.id, editionAddress),
  )

  const soundSepoliaMintCalls = await Promise.all(mintCallsPromises)

  const bridgeCalls = await getSoundBridgeTx({
    destinationChainId: sepolia.id,
    originChainId: CHAIN_ID,
    user: signingAddress,
    txs: soundSepoliaMintCalls.map((mintCall: any) => ({
      to: mintCall.target,
      data: mintCall.callData,
      value: mintCall.value.toString(),
    })),
  })

  console.log("SWEETS BRIDGE CALLS", bridgeCalls)

  return bridgeCalls
}

export default getSoundInterstellarMintCall
