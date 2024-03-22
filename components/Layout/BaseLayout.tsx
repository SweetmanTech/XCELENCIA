import { useRouter } from "next/router"
import Header from "../Header"
import { ILayout } from "./types"

const BaseLayout = ({
  children,
  backgroundImage = "bg-[url('/images/background.jpg')]",
}: ILayout) => {
  const { pathname } = useRouter()
  const isApril4 = pathname.includes("april4")
  
  return (
    <div
    className={`w-full overflow-hidden min-h-screen flex justify-center 
  bg-cover bg-center ${backgroundImage}`}
  >
      {isApril4 && <Header />}
      {children}
    </div>
  )
}

export default BaseLayout
