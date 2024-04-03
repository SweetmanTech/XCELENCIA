import { CHAIN_ID, SOUND_SEPOLIA_DROP_ADDRESS, SPOTIFY_DROP_ADDRESS } from "../consts"
import getSoundInterstellarMintCall from "./getSoundInterstellarMintCall"
import getSoundMintCall from "./getSoundMintCall"

const getAllSoundCalls = async (recipient, signingAddress) => {
  // Generate promises for base contract calls
  const baseContracts = [
    SPOTIFY_DROP_ADDRESS,
    "0xA4151A4eD938a686EE1a85c648E157cD9e6A8b7F",
    "0xc4836FFEa055836dEfb9598CAe91a4f07363c3aB",
    "0xe164b2dE17fBcB6A52e979345031A259D1221788",
    "0x8f0ba824B61279b56aF1E7D31b54658e3d30a708",
    "0xd7BFa505BB2c7EC8e9f09CB86180780f94477416",
    "0x7cf48fcd77Bf3344cD3C4d07627609884367A00E",
    "0x183d6c62D06C442170a26024CfB5683a65ECDe2c",
    "0x1dbB8c2064726d56903d1e9B3b907298fb6b716A",
    "0xdbb470d0d695e7d4377873fe3ffba91460bc17af",
    "0x9dc88d492f6b6fb7a380c3314de61509cf8fa30e",
  ]
  const interstellarContracts = [SOUND_SEPOLIA_DROP_ADDRESS]

  const basePromises = baseContracts.map((contractAddress: `0x${string}`) =>
    getSoundMintCall(recipient, CHAIN_ID, contractAddress),
  )

  // Generate promises for interstellar contract calls
  const interstellarPromises = interstellarContracts.map((contractAddress: `0x${string}`) =>
    getSoundInterstellarMintCall(recipient, signingAddress, contractAddress),
  )

  // Wait for all promises to resolve
  try {
    const allCalls = await Promise.all([...basePromises, ...interstellarPromises])

    // Filter out any failed calls (assuming failed calls return false or null)
    const validCalls = allCalls.filter((call) => call)

    // Check if we have any valid calls, if not return false
    if (!validCalls.length) {
      return false
    }

    // Calculate the total value and prepare the result
    const totalValue = validCalls.reduce(
      (total, call: any) => total + BigInt(call.value),
      BigInt(0),
    )

    console.log("SWEETS RETURN", {
      value: totalValue,
      calls: validCalls,
    })
    return {
      value: totalValue,
      calls: validCalls,
    }
  } catch (error) {
    console.error(error)
    return false
  }
}

export default getAllSoundCalls
