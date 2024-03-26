import { CHAIN } from "@/lib/consts"
import useConnectedWallet from "@/hooks/useConnectedWallet"
import usePrivyWalletClient from "@/hooks/usePrivyWalletClient"
import { useState } from "react"
import { BigNumber } from "ethers"
import { baseSepolia } from "viem/chains"
import soundV2Abi from "@/lib/abi/sound-creator-v2.json"

const CreateSoundEditionButton = ({ className = "" }) => {
  const { walletClient } = usePrivyWalletClient(CHAIN)
  const { wallet, connectedWallet } = useConnectedWallet()
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    try {
      const privyChainId = wallet?.chainId
      if (privyChainId !== `eip155:${CHAIN.id}`) {
        await wallet?.switchChain(CHAIN.id)
        return
      }
      if (!connectedWallet) return

      setLoading(true)
      const anyWallet = walletClient as any

      const hash = await anyWallet.editionV2.createEdition({
        chain: baseSepolia,
        functionName: "create",
        address: "0x0000000000aec84F5BFc2af15EAfb943bf4e3522",
        account: connectedWallet as `0x${string}`,
        abi: soundV2Abi,
        args: [
          {
            implementation: "0x000000000053C8B49473BDa4b8d1DC47CAb411CC",
            initData: `0x7f84110f0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000001800000000000000000000000000000000000f5a96dc85959caeb0cfe680f108fb500000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000002200000000000000000000000002080699a61efa9f6947901ed2361d4d0eea0fca4000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002800000000000000000000000000000000000000000000000000000000000000017476c6173734172742e657468204d656d626572736869700000000000000000000000000000000000000000000000000000000000000000000000000000000002474d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000036697066733a2f2f516d50766d485a5665767545444a67567657665a53346e54385437633745384a4b5a7742597455573237355071353f000000000000000000000000000000000000000000000000000000000000000000000000000000000036697066733a2f2f516d5a48714e6446355a395059626f514644347a32395a5961335a596f5173427153574d4b566e6b3471716753412f000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000ffffffff00000000000000000000000000000000000000000000000000000000ffffffff000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            owner: connectedWallet,
            salt: "0x79e71c91a25bbfe3791b82cb6813bbd1c13e7cf57f129ad65346da669b8981dc",
            contracts: [],
            data: [],
            nonce: BigNumber.from("0").toBigInt(),
          },
        ],
      })
      setLoading(false)
      // eslint-disable-next-line consistent-return
      return hash
    } catch (error) {
      setLoading(false)
      // eslint-disable-next-line consistent-return
      return { error }
    }
  }

  return (
    <button
      type="button"
      className={`text-[18px] font-bold uppercase bg-gray rounded-full
        px-[20px] py-[10px] ${className}`}
      onClick={handleClick}
    >
      {loading ? "Creating..." : "Create Sound Edition"}
    </button>
  )
}

export default CreateSoundEditionButton