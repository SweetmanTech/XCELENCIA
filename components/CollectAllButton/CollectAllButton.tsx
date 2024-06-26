import useEthPrice from "@/hooks/useEthPrice"
import useTBAPurchase from "@/hooks/useTBAPurchase"
import getUsdConversion from "@/lib/getUsdConversion"
import { useCollectionProvider } from "@/providers/CollectionProvider"
import { useRouter } from "next/router"

const CollectAllButton = ({ className = "" }) => {
  const { ethPrice } = useEthPrice()
  const { purchase, loading } = useTBAPurchase()
  const { checkCollected } = useCollectionProvider()
  const { push } = useRouter()
  const ethAmount = "0.01425"

  const handleClick = async () => {
    const response = await purchase()
    if (!response) return
    await checkCollected()
    push("/imagine")
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`text-[18px] font-bold uppercase bg-gray rounded-full
        px-[20px] py-[10px] ${className}`}
        disabled={loading}
      >
        {loading ? `Collecting...` : "Collect Album"}
      </button>
      <div className="text-white">
        {ethAmount} ETH (${getUsdConversion(parseFloat(ethAmount), ethPrice)})
      </div>
    </>
  )
}

export default CollectAllButton
