import Header from "../Header"
import { ILayout } from "./types"

const BaseLayout = ({ children }: ILayout) => (
  <div className="w-full overflow-hidden bg-pink min-h-screen">
    <Header />
    {children}
  </div>
)

export default BaseLayout
