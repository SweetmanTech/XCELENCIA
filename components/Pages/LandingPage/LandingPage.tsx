import Content from "@/components/Layout/Content"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import VideoPlayer from "./VideoPlayer"
import MusicPlayer from "./MusicPlayer"
import ArtworkAlbum from "./ArtworkAlbum"

const LandingPage = () => (
  <Layout type="base">
    <SeoHead />
    <Content>
      <div className="w-full grid grid-cols-2 mt-[30px] gap-y-[30px]">
        <div className="col-span-2 flex justify-center">
          <VideoPlayer />
        </div>
        <div className="flex justify-center">
          <ArtworkAlbum />
        </div>
        <div className="flex justify-center">
          <MusicPlayer />
        </div>
      </div>
    </Content>
  </Layout>
)

export default LandingPage
