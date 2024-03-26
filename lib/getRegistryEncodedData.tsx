import { ACCOUNT_PROXY, CHAIN_ID, SALT_BYTES } from "@/lib/consts"
import { Interface } from "ethers/lib/utils"
import registryAbi from "@/lib/abi/erc6551-registry.json"

const getRegistryEncodedData = (dropAddress, tokenId) =>
  new Interface(registryAbi).encodeFunctionData("createAccount", [
    ACCOUNT_PROXY,
    SALT_BYTES,
    CHAIN_ID,
    dropAddress,
    tokenId,
  ])

export default getRegistryEncodedData
