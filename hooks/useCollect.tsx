import { CHAIN_ID, DROP_ADDRESS, MINTER_ADDRESS, MINT_REFERRAL_ADDRESS } from "@/lib/consts"
import { zoraCreator1155ImplABI } from "@zoralabs/1155-deployments"
import getEncodedMinterArgs from "@/lib/getEncodedMinterArgs"
import { BigNumber } from "ethers"
import usePrivySendTransaction from "./usePrivySendTransaction"
import useConnectedWallet from "./useConnectedWallet"

const useCollect = () => {
  const { sendTransaction } = usePrivySendTransaction()
  const { connectedWallet } = useConnectedWallet()

  const mintWithRewards = async () => {
    console.log("SWEETS CONTRACT", zoraCreator1155ImplABI)
    const minterArgs = getEncodedMinterArgs(connectedWallet, "el nino estrello")
    const args = [MINTER_ADDRESS, 1, 1, minterArgs, MINT_REFERRAL_ADDRESS]
    const valueHex = BigNumber.from("1554000000000000").toHexString()
    try {
      const response = await sendTransaction(
        DROP_ADDRESS,
        CHAIN_ID,
        zoraCreator1155ImplABI,
        "mintWithRewards",
        args,
        valueHex,
      )
      return response
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      return { error }
    }
  }

  return { mintWithRewards }
}

export default useCollect
