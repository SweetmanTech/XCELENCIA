import Header from "../Header"
import { ILayout } from "./types"

const BaseLayout = ({
  children,
  backgroundImage = "bg-[url('/images/background.jpg')]",
}: ILayout) => (
  <div
    className={`w-full overflow-hidden min-h-screen flex justify-center 
  bg-cover bg-center ${backgroundImage}`}
  >
    <Header />
    {children}
  </div>
)

export default BaseLayout
