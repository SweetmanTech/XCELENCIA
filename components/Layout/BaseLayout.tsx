import { useRouter } from "next/router"
import Header from "../Header"
import { ILayout } from "./types"

const BaseLayout = ({ children }: ILayout) => {
  const { pathname } = useRouter()

  const isApril4 = pathname.includes("april4")
  return (
    <div className="w-full overflow-hidden bg-pink min-h-screen flex justify-center">
      {isApril4 && <Header />}
      {children}
    </div>
  )
}

export default BaseLayout
