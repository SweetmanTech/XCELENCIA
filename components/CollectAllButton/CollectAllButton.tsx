import useTBAPurchase from "@/hooks/useTBAPurchase"

const CollectAllButton = ({ className = "" }) => {
  const { purchase, loading } = useTBAPurchase()

  const handleClick = async () => {
    await purchase(1)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`text-[18px] font-bold uppercase bg-gray rounded-full
      px-[20px] py-[10px] ${className}`}
      disabled={loading}
    >
      {loading ? "Collecting..." : "Collect All"}
    </button>
  )
}

export default CollectAllButton
