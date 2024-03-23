import useConnectedWallet from "@/hooks/useConnectedWallet"
import usePrivyWalletClient from "@/hooks/usePrivyWalletClient"
import useTBAPurchase from "@/hooks/useTBAPurchase"
import { getPublicClient } from "@/lib/clients"
import { CHAIN, CHAIN_ID } from "@/lib/consts"
import { Client } from "viem"

const SoundCollectButton = ({ className = "" }) => {
  const { walletClient } = usePrivyWalletClient()
  const { externalWallet } = useConnectedWallet()
  const { purchase, loading } = useTBAPurchase()

  const handleClick = async () => {
    console.log("Sound SDK Collect", walletClient)
    const [address] = await walletClient.getAddresses()
    console.log("address", address)
    const SPOTIFY = "0xdE88522Dc78a6cc99C1CfF060d8BC744291E159a"
    const publicClient = getPublicClient(CHAIN_ID)
    console.log("publicClient", publicClient)

    const { isSoundEditionV1, isSoundEditionV2 } = await publicClient.soundEditionVersion({
      contractAddress: SPOTIFY,
    })
    console.log("isSoundEditionV1", isSoundEditionV1)
    console.log("isSoundEditionV2", isSoundEditionV2)

    const mintSchedules = await publicClient.editionV2.mintSchedules({
      editionAddress: SPOTIFY,
    })
    console.log("mintSchedules", mintSchedules)

    const mintParams = await publicClient.editionV2.mintParameters({
      account: externalWallet.address,
      chain: CHAIN,
      schedule: mintSchedules.activeSchedules[0],
      quantity: 1,
      editionAddress: SPOTIFY,
      mintTo: externalWallet.address,
    })
    console.log("mintParams", mintParams)
    // return publicClient.editionV2.mintParameters({
    //   account: walletClient.account,
    //   chain: walletClient.walletClient.chain,
    //   schedule: 0,
    //   quantity: 1,
    //   editionAddress: SPOTIFY,
    //   mintTo: wallet.account.address,
    // })
    console.log("walletClient", walletClient)

    const hash = await walletClient.editionV2.mint(mintParams.mint)
    console.log("hash", hash)
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
