import { Interface } from "ethers/lib/utils"
import {
  ACCOUNT_PROXY,
  CHAIN_ID,
  DROP_ADDRESS,
  MINT_REFERRAL_ADDRESS,
  REGISTRY_ADDRESS,
  SALT_BYTES,
} from "@/lib/consts"
import registryAbi from "@/lib/abi/ERC6551-registry.json"
import zoraAbi from "@/lib/abi/zora-erc721-drop.json"

const getMintMulticallCalls = (
  tokenId: string,
  mintRecipient: string,
  mintQuantity: number,
  totalPrice: string,
) => {
  // Create data for the createAccount function call
  const createAccountData = new Interface(registryAbi).encodeFunctionData("createAccount", [
    ACCOUNT_PROXY,
    SALT_BYTES,
    CHAIN_ID,
    DROP_ADDRESS,
    tokenId,
  ])
  const registryCall = {
    target: REGISTRY_ADDRESS,
    value: 0, // No ETH being sent in this call
    allowFailure: false,
    callData: createAccountData,
  }
  const comment = "XCELENCIA - ERC6551 smart wallet 🪄"

  const mintData = new Interface(zoraAbi).encodeFunctionData("mintWithRewards", [
    mintRecipient,
    mintQuantity,
    comment,
    MINT_REFERRAL_ADDRESS,
  ])
  const mintCall = {
    target: DROP_ADDRESS,
    value: totalPrice,
    allowFailure: false,
    callData: mintData,
  }

  const calls = [mintCall, registryCall]
  return calls
}

export default getMintMulticallCalls