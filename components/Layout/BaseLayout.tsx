import Header from "../Header"
import { ILayout } from "./types"

const BaseLayout = ({ children }: ILayout) => (
  <div
    className="w-full flex justify-center
      min-h-screen overflow-hidden bg-pink"
  >
    <Header />
    {children}
  </div>
)

export default BaseLayout
