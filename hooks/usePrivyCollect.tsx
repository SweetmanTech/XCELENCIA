import useConnectedWallet from "./useConnectedWallet"
import useZoraDropData from "./useZoraDropData"
import { ZORA_FEE, useZoraFixedPriceSaleStrategy } from "onchain-magic"
import { BigNumber } from "ethers"
import { CHAIN_ID, IS_TESTNET, BASE_MINTER, SEPOLIA_MINTER, MINT_REFERRAL } from "@/lib/consts"
import { defaultAbiCoder } from "ethers/lib/utils"
import usePrivySendTransaction from "./usePrivySendTransaction"
import zora1155Abi from "@/lib/abi/abi-ERC1155Drop.json"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import { toast } from "react-toastify"

const usePrivyCollect = () => {
  const { drops } = useZoraDropData()
  const { sendTransaction } = usePrivySendTransaction()
  const { prepare } = usePreparePrivyWallet()
  const { connectedWallet } = useConnectedWallet()

  const { sale } = useZoraFixedPriceSaleStrategy({
    saleConfig: IS_TESTNET ? SEPOLIA_MINTER : BASE_MINTER,
    drops,
    chainId: CHAIN_ID,
  })

  const collectAll = async () => {
    if (!prepare()) return

    const response = await sale(process.env.NEXT_PUBLIC_DROP_ADDRESS, "1")
    const value = BigNumber.from(response.pricePerToken.toString()).add(ZORA_FEE)

    const minterArguments = defaultAbiCoder.encode(
      ["address", "string"],
      [connectedWallet, "xcelencia" || ""],
    )

    await sendTransaction(
      process.env.NEXT_PUBLIC_DROP_ADDRESS,
      CHAIN_ID,
      zora1155Abi,
      "mintWithRewards",
      [IS_TESTNET ? SEPOLIA_MINTER : BASE_MINTER, 1, 1, minterArguments, MINT_REFERRAL],
      value.toHexString(),
      "XCELENCIA",
      "COLLECT ALL",
    )

    toast.success("collected!")
  }

  return { collectAll }
}

export default usePrivyCollect
