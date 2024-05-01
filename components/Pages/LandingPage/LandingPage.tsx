import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import LiveHome from "./LiveHome"

const LandingPage = () => (
  <Layout type="base" backgroundImage="bg-[url('/images/home-bg.jpg')]">
    <SeoHead />
    <LiveHome />
  </Layout>
)

export default LandingPage
