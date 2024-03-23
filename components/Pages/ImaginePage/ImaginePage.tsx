import Layout from "@/components/Layout"
import Content from "@/components/Layout/Content"
import SeoHead from "@/components/SeoHead"
import SmartAlbum from "./SmartAlbum"
import MusicPlayer from "../LandingPage/MusicPlayer"

const ImaginePage = () => (
  <Layout type="base">
    <SeoHead />
    <Content>
      <div className="w-full">
        <div className="w-full text-white pl-[100px] text-[40px] text-[white] font-poppins_italic">
          your smart album contains:
        </div>
        <div className="w-full grid grid-cols-2 mt-[50px]">
          <div className="flex justify-start mt-[10px] pl-[150px]">
            <MusicPlayer />
          </div>
          <div className="w-full flex justify-start">
            <SmartAlbum />
          </div>
        </div>
      </div>
    </Content>
  </Layout>
)

export default ImaginePage
