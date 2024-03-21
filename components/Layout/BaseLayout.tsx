import useCountDown, { SCREEN } from "@/hooks/useCountDown"
import Header from "../Header"
import { ILayout } from "./types"

const BaseLayout = ({ children }: ILayout) => {
  const { screenMode } = useCountDown()

  return (
    <div className="w-full overflow-hidden bg-pink min-h-screen flex justify-center">
      {screenMode === SCREEN.COLLECT && <Header />}
      {children}
    </div>
  )
}

export default BaseLayout
