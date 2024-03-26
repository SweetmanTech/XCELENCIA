import { Interface } from "ethers/lib/utils"
import editionV2Abi from "@/lib/abi/sound-edition-v2.json"
import { SPOTIFY_DROP_ADDRESS } from "./consts"

const getSoundMintCall = (mintRecipient, mintQuantity, totalPrice: any) => {
  const soundMintData = new Interface(editionV2Abi).encodeFunctionData("mint", [
    0,
    mintRecipient,
    mintQuantity,
  ])
  return {
    target: SPOTIFY_DROP_ADDRESS,
    value: totalPrice,
    allowFailure: false,
    callData: soundMintData,
  }
}

export default getSoundMintCall
