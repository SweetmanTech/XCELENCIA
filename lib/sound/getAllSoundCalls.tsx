import { CHAIN_ID, SOUND_SEPOLIA_DROP_ADDRESS, SPOTIFY_DROP_ADDRESS } from "../consts"
import getSoundInterstellarMintCall from "./getSoundInterstellarMintCall"
import getSoundMintCall from "./getSoundMintCall"

const getAllSoundCalls = async (recipient, signingAddress) => {
  // Generate promises for base contract calls
  const baseContracts = [SPOTIFY_DROP_ADDRESS]
  const interstellarContracts = [SOUND_SEPOLIA_DROP_ADDRESS]

  const basePromises = baseContracts.map((contractAddress: `0x${string}`) =>
    getSoundMintCall(recipient, CHAIN_ID, contractAddress),
  )

  // Generate promises for interstellar contract calls
  const interstellarPromises = interstellarContracts.map((contractAddress: `0x${string}`) =>
    getSoundInterstellarMintCall(recipient, signingAddress, contractAddress),
  )

  // Wait for all promises to resolve
  const allCalls = await Promise.all([...basePromises, ...interstellarPromises])

  // Filter out any failed calls (assuming failed calls return false or null)
  const validCalls = allCalls.filter((call) => call)

  // Check if we have any valid calls, if not return false
  if (!validCalls.length) {
    return false
  }

  // Calculate the total value and prepare the result
  const totalValue = validCalls.reduce((total, call: any) => total + BigInt(call.value), BigInt(0))

  return {
    value: totalValue,
    calls: validCalls,
  }
}

export default getAllSoundCalls
