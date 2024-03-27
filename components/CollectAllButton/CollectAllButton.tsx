import useTBAPurchase from "@/hooks/useTBAPurchase"
import { useCollectionProvider } from "@/providers/CollectionProvider"

const CollectAllButton = ({ className = "" }) => {
  const { purchase, loading } = useTBAPurchase()
  const { checkCollected } = useCollectionProvider()

  const handleClick = async () => {
    const response = await purchase()
    if (!response) return
    await checkCollected()
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`text-[18px] font-bold uppercase bg-gray rounded-full
      px-[20px] py-[10px] ${className}`}
      disabled={loading}
    >
      {loading ? `Collecting...` : "Collect Album"}
    </button>
  )
}

export default CollectAllButton
