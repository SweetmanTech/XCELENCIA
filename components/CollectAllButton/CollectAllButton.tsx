import { useEthersSigner } from "@/hooks/useEthersSigner"
import { useConnectModal } from "@rainbow-me/rainbowkit"

const CollectAllButton = () => {
  const signer = useEthersSigner()
  const { openConnectModal } = useConnectModal()

  const onClick = () => {
    if (!signer) {
      openConnectModal()
    }
  }

  return (
    <button
      type="button"
      className="text-[18px] font-bold uppercase bg-gray rounded-full
          px-[20px] py-[10px]"
      onClick={onClick}
    >
      Collect All
    </button>
  )
}

export default CollectAllButton
