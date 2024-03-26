import useTBAPurchase from "@/hooks/useTBAPurchase"

const CollectAllButton = ({ className = "" }) => {
  const { purchase, loading } = useTBAPurchase()

  const handleClick = async () => {
    await purchase()
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
