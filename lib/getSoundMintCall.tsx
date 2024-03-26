import { Interface } from "ethers/lib/utils"
import editionV2Abi from "@/lib/abi/sound-edition-v2.json"
import superminterAbi from "@/lib/abi/superminter.json"
import { CHAIN, CHAIN_ID, SPOTIFY_DROP_ADDRESS } from "./consts"
import { getPublicClient } from "./clients"

const getSoundMintCall = async (mintRecipient, mintQuantity, totalPrice: any) => {
  const soundMintData = new Interface(editionV2Abi).encodeFunctionData("mint", [
    0,
    mintRecipient,
    mintQuantity,
  ])
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
  const { args, functionName, address: SUPERMINTER, value } = mintParams.mint.input
  console.log("SWEETS functionName", functionName)
  console.log("SWEETS SUPERMINTER", SUPERMINTER)
  console.log("SWEETS mintParams", mintParams.mint)

  const soundMintDataV2 = new Interface(superminterAbi).encodeFunctionData(functionName, args)
  console.log("SWEETS soundMintData", soundMintData)
  console.log("SWEETS soundMintDataV2", soundMintDataV2)

  return {
    target: SUPERMINTER,
    value,
    allowFailure: false,
    callData: soundMintDataV2,
  }
}

export default getSoundMintCall
