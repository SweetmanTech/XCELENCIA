import { Interface } from "ethers/lib/utils"
import { CHAIN, CHAIN_ID, SPOTIFY_DROP_ADDRESS } from "./consts"
import { getPublicClient } from "./clients"

const getSoundMintCall = async (mintRecipient) => {
  const publicClient = getPublicClient(CHAIN_ID)
  const anyPublicClient = publicClient as any

  const mintSchedules = await anyPublicClient.editionV2.mintSchedules({
    editionAddress: SPOTIFY_DROP_ADDRESS,
  })
  const mintParams = await anyPublicClient.editionV2.mintParameters({
    account: mintRecipient,
    chain: CHAIN,
    schedule: mintSchedules.activeSchedules[0],
    quantity: 1,
    editionAddress: SPOTIFY_DROP_ADDRESS,
    mintTo: mintRecipient,
  })
  const { args, functionName, address: SUPERMINTER, value, abi } = mintParams.mint.input
  const soundMintDataV2 = new Interface(abi).encodeFunctionData(functionName, args)

  return {
    target: SUPERMINTER,
    value,
    allowFailure: false,
    callData: soundMintDataV2,
  }
}

export default getSoundMintCall
