import CustomConnectWallet from "@/components/CustomConnectWallet"
import { useRouter } from "next/router"

const Header = () => {
  const { push } = useRouter()

  return (
    <nav
      className="w-full fixed top-0 left-0
            flex items-center justify-between z-[1000]
            px-[40px] py-[20px]"
    >
      <button
        className="text-white text-[24px] font-semibold"
        onClick={() => push("/imagination")}
        type="button"
      >
        Imagination
      </button>
      <div className="px-[24px] py-[10px] bg-gray rounded-full">
        <CustomConnectWallet />
      </div>
    </nav>
  )
}

export default Header
