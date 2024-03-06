import useTBAPurchase from "@/hooks/useTBAPurchase"
import { usePrivy } from "@privy-io/react-auth"

const CollectAllButton = ({ className = "" }) => {
  const { login, authenticated } = usePrivy()
  const { purchase } = useTBAPurchase()

  const handleClick = async () => {
    if (!authenticated) {
      login()
      return
    }
    await purchase(1)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`text-[18px] font-bold uppercase bg-gray rounded-full
      px-[20px] py-[10px] ${className}`}
    >
      Collect All
    </button>
  )
}

export default CollectAllButton
