import useConnectedWallet from "@/hooks/useConnectedWallet"
import usePrivyWalletClient from "@/hooks/usePrivyWalletClient"
import useTBAPurchase from "@/hooks/useTBAPurchase"
import { getPublicClient } from "@/lib/clients"
import { CHAIN, CHAIN_ID } from "@/lib/consts"

const SoundCollectButton = ({ className = "" }) => {
  const { walletClient } = usePrivyWalletClient()
  const { externalWallet } = useConnectedWallet()
  const { loading } = useTBAPurchase()

  const handleClick = async () => {
    const SPOTIFY = "0xdE88522Dc78a6cc99C1CfF060d8BC744291E159a"
    const publicClient = getPublicClient(CHAIN_ID)
    const anyPublicClient = publicClient as any

    const mintSchedules = await anyPublicClient.editionV2.mintSchedules({
      editionAddress: SPOTIFY,
    })

    const mintParams = await anyPublicClient.editionV2.mintParameters({
      account: externalWallet.address,
      chain: CHAIN,
      schedule: mintSchedules.activeSchedules[0],
      quantity: 1,
      editionAddress: SPOTIFY,
      mintTo: externalWallet.address,
    })
    const anyWallet = walletClient as any
    const hash = await anyWallet.editionV2.mint(mintParams.mint)
    return hash
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`text-[18px] font-bold uppercase bg-gray rounded-full
      px-[20px] py-[10px] ${className}`}
      disabled={loading}
    >
      {loading ? "Collecting..." : "Sound SDK Collect"}
    </button>
  )
}

export default SoundCollectButton
