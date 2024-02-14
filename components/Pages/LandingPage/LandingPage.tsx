import Content from "@/components/Layout/Content"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import VideoPlayer from "./VideoPlayer"
import MusicPlayer from "./MusicPlayer"
import ArtworkAlbum from "./ArtworkAlbum"
import Bundles from "./Bundles"
import CollectButtons from "./CollectButtons"

const LandingPage = () => (
  <Layout type="base">
    <SeoHead />
    <Content>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-[30px] gap-y-[15px] md:gap-y-[30px]">
        <div className="md:col-span-2 flex justify-center">
          <VideoPlayer />
        </div>
        <div className="flex justify-center">
          <ArtworkAlbum />
        </div>
        <div className="flex justify-center">
          <MusicPlayer />
        </div>
        <div className="md:col-span-2 w-full">
          <CollectButtons />
        </div>
        <div className="md:col-span-2 flex justify-center">
          <Bundles />
        </div>
      </div>
    </Content>
  </Layout>
)

export default LandingPage
