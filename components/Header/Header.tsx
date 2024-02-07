import CustomConnectWallet from "@/components/CustomConnectWallet"

const Header = () => (
  <nav
    className="w-full fixed top-0 left-0
          flex items-center justify-end z-[1000]
          px-[40px] py-[20px]"
  >
    <div className="px-[24px] py-[10px] bg-gray rounded-full">
      <CustomConnectWallet />
    </div>
  </nav>
)

export default Header
