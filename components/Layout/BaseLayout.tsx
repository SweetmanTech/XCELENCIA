import Header from "../Header"
import { ILayout } from "./types"

const BaseLayout = ({ children }: ILayout) => (
  <div className="w-full overflow-hidden bg-pink min-h-screen flex justify-center">
    <Header />
    {children}
  </div>
)

export default BaseLayout
