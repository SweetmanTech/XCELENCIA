import usePrivyCollect from "@/hooks/usePrivyCollect"
import { usePrivy } from "@privy-io/react-auth"

const CollectAllButton = ({ className = "" }) => {
  const { login, authenticated } = usePrivy()
  const { collectAll, loading } = usePrivyCollect()

  const handleClick = () => {
    if (!authenticated) {
      login()
      return
    }

    collectAll()
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`text-[18px] font-bold uppercase bg-gray rounded-full
      px-[20px] py-[10px] ${className}`}
    >
      {loading ? "Collecting..." : "Collect All"}
    </button>
  )
}

export default CollectAllButton
