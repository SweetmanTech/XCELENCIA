import { useRouter } from "next/router"
import Header from "../Header"
import { ILayout } from "./types"
import Footer from "../Footer"

const BaseLayout = ({
  children,
  backgroundImage = "bg-[url('/images/background.jpg')]",
}: ILayout) => {
  const { pathname } = useRouter()
  const isApril4 = pathname.includes("april4")

  return (
    <div
      className={`w-full overflow-hidden min-h-screen 
      flex flex-col items-center
      bg-cover bg-center ${backgroundImage}`}
    >
      {isApril4 && <Header />}
      <div className="flex flex-grow mt-[150px]">{children}</div>
      <Footer />
    </div>
  )
}

export default BaseLayout
