import useCountDown, { SCREEN } from "@/hooks/useCountDown"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import Presave from "./Presave"

const PresavePage = () => {
  const { screenMode } = useCountDown()
  return (
    <Layout type="base">
      <SeoHead />
      <div className="w-full flex justify-center items-center">
        {screenMode === SCREEN.COUNTDOWN && <Presave />}
      </div>
    </Layout>
  )
}

export default PresavePage
