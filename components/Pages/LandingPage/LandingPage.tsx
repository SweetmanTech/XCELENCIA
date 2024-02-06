import Layout from "../../Layout"
import SeoHead from "../../SeoHead"

const LandingPage = () => (
  <Layout type="base">
    <SeoHead />
    <div
      className="xl:w-[1440px] lg:w-[1280px] md:w-[1024px] h-screen
              flex items-center justify-around"
    />
  </Layout>
)

export default LandingPage
