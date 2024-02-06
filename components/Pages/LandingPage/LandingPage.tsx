import Content from "@/components/Layout/Content"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import Media from "@/shared/Media"

const LandingPage = () => (
  <Layout type="base">
    <SeoHead />
    <Content>
      <div className="w-full grid grid-cols-2">
        <div className="col-span-2">
          <Media
            link="/images/video.png"
            blurLink="/images/video.png"
            containerClasses="w-[649px] h-[322px]"
          />
        </div>
      </div>
    </Content>
  </Layout>
)

export default LandingPage
