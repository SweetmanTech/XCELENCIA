import { REGISTRY_ADDRESS } from "./consts"

const getRegistryCall = (createAccountData) => ({
  target: REGISTRY_ADDRESS,
  value: 0,
  allowFailure: false,
  callData: createAccountData,
})

export default getRegistryCall
