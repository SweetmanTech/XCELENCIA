import useConnectedWallet from "./useConnectedWallet"
import { BigNumber } from "ethers"
import { CHAIN_ID, IS_TESTNET, BASE_MINTER, SEPOLIA_MINTER, MINT_REFERRAL } from "@/lib/consts"
import { defaultAbiCoder } from "ethers/lib/utils"
import usePrivySendTransaction from "./usePrivySendTransaction"
import zora1155Abi from "@/lib/abi/abi-ERC1155Drop.json"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import { toast } from "react-toastify"
import useZoraFixedPriceSaleStrategy from "./useZoraFixedPriceSaleStrategy"
import { ZORA_FEE } from "@/lib/consts"
import handleTxError from "@/lib/handleTxError"
import { useState } from "react"

const usePrivyCollect = () => {
  const { sendTransaction } = usePrivySendTransaction()
  const { prepare } = usePreparePrivyWallet()
  const { connectedWallet } = useConnectedWallet()
  const [loading, setLoading] = useState(false)

  const { sale } = useZoraFixedPriceSaleStrategy({
    saleConfig: IS_TESTNET ? SEPOLIA_MINTER : BASE_MINTER,
    chainId: CHAIN_ID,
  })

  const collectAll = async () => {
    setLoading(true)
    try {
      if (!prepare()) return
      if (!connectedWallet) return

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
      )

      toast.success("collected!")
    } catch (error) {
      handleTxError(error)
    }
    setLoading(false)
  }

  return { collectAll, loading }
}

export default usePrivyCollect
