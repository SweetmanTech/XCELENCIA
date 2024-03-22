import { useRouter } from "next/router"
import SignButton from "../SignButton"

const Header = () => {
  const { push, pathname } = useRouter()

  const isImaginePage = pathname.includes("/april4/imagine")
  const isHomePage = pathname.includes("/april4/home") || pathname === "/april4"

  const onClick = () => {
    if (isHomePage) push("/april4/imagine")
    if (isImaginePage) push("/april4")
  }

  return (
    <nav
      className="w-full fixed top-0 left-0
            flex items-center justify-between z-[1000]
            px-[40px] py-[20px]"
    >
      <button className="text-white text-[24px] font-semibold" onClick={onClick} type="button">
        {isImaginePage && "Home"}
        {isHomePage && "Imagine"}
      </button>
      <SignButton />
    </nav>
  )
}

export default Header
