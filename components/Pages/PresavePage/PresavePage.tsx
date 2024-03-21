import useCountDown, { SCREEN } from "@/hooks/useCountDown"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import Presave from "./Presave"

const PresavePage = () => {
  const { screenMode } = useCountDown()
  return (
    <Layout type="base">
      <SeoHead />
      {screenMode === SCREEN.COUNTDOWN && <Presave />}
    </Layout>
  )
}

export default PresavePage
