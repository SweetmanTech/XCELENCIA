import { useRouter } from "next/router"
import SignButton from "../SignButton"

const Header = () => {
  const { push } = useRouter()
  const itemClasses = "text-white text-[24px] font-semibold"

  return (
    <nav
      className="w-full fixed top-0 left-0
            flex items-center justify-between z-[1000]
            px-[40px] py-[20px]"
    >
      <div className="flex gap-x-[20px] items-center">
        <button className={itemClasses} onClick={() => push("/")} type="button">
          Home
        </button>
        <button className={itemClasses} onClick={() => push("/imagine")} type="button">
          Imagination
        </button>
      </div>
      <SignButton />
    </nav>
  )
}

export default Header
