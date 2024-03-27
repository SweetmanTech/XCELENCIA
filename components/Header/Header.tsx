import { useRouter } from "next/router"
import { useCollectionProvider } from "@/providers/CollectionProvider"
import SignButton from "../SignButton"

const Header = () => {
  const itemClasses = "text-white text-[24px] font-semibold"
  const { push, pathname } = useRouter()
  const { isCollectedZora } = useCollectionProvider()

  const isApril4 = pathname.includes("/april4")

  return (
    <nav
      className="w-full fixed top-0 left-0
            flex items-center justify-between z-[1000]
            px-[40px] py-[20px]"
    >
      <div className="flex gap-x-[20px] items-center">
        <button
          className={itemClasses}
          onClick={() => push(isApril4 ? "/april4" : "/")}
          type="button"
        >
          Home
        </button>
        {isCollectedZora && (
          <button
            className={itemClasses}
            onClick={() => push(isApril4 ? "/april4/imagine" : "/imagine")}
            type="button"
          >
            Imagination
          </button>
        )}
      </div>
      <SignButton />
    </nav>
  )
}

export default Header
