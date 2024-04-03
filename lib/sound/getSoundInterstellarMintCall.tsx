import { sepolia } from "viem/chains"
import { CHAIN_ID, SOUND_SEPOLIA_DROP_ADDRESS } from "../consts"
import getSoundBridgeTx from "./getSoundBridgeTx"
import getSoundMintCall from "./getSoundMintCall"

const getSoundInterstellarMintCall = async (
  recipient: `0x${string}`,
  signingAddress: `0x${string}`,
  editionAddress: `0x${string}`,
) => {
  const soundSepoliaMintCall = (await getSoundMintCall(
    recipient,
    sepolia.id,
    editionAddress,
  )) as any
  const bridgeCalls = await getSoundBridgeTx({
    destinationChainId: sepolia.id,
    originChainId: CHAIN_ID,
    user: signingAddress,
    txs: [
      {
        to: soundSepoliaMintCall.target,
        data: soundSepoliaMintCall.callData,
        value: soundSepoliaMintCall.value.toString(),
      },
    ],
  })

  return bridgeCalls
}

export default getSoundInterstellarMintCall
