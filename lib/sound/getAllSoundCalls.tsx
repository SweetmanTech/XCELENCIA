import { CHAIN_ID, SOUND_BASE_SEPOLIA_TRACKLIST, SOUND_SEPOLIA_DROP_ADDRESS } from "../consts"
import getSoundInterstellarMintCall from "./getSoundInterstellarMintCall"
import getSoundMintCall from "./getSoundMintCall"

const getAllSoundCalls = async (recipient, signingAddress) => {
  const interstellarContracts = [SOUND_SEPOLIA_DROP_ADDRESS]

  const basePromises = SOUND_BASE_SEPOLIA_TRACKLIST.map((contractAddress: `0x${string}`) =>
    getSoundMintCall(recipient, CHAIN_ID, contractAddress),
  )

  const interstellarPromises = interstellarContracts.map((contractAddress: `0x${string}`) =>
    getSoundInterstellarMintCall(recipient, signingAddress, contractAddress),
  )

  try {
    const allCalls = await Promise.all([...basePromises, ...interstellarPromises])
    const validCalls = allCalls.filter((call) => call)
    if (!validCalls.length) {
      return false
    }
    const totalValue = validCalls.reduce(
      (total, call: any) => total + BigInt(call.value),
      BigInt(0),
    )
    return {
      value: totalValue,
      calls: validCalls,
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    return false
  }
}

export default getAllSoundCalls
