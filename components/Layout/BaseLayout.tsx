import Header from "../Header"
import { ILayout } from "./types"
import Footer from "../Footer"

const BaseLayout = ({
  children,
  backgroundImage = "bg-[url('/images/background.jpg')]",
}: ILayout) => (
  <div
    className={`w-full overflow-hidden min-h-screen 
      flex flex-col items-center
      bg-cover bg-center ${backgroundImage}`}
  >
    <Header />
    <div className="flex flex-grow mt-[150px]">{children}</div>
    <Footer />
  </div>
)

export default BaseLayout
