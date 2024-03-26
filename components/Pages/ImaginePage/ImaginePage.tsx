import Layout from "@/components/Layout"
import Content from "@/components/Layout/Content"
import SeoHead from "@/components/SeoHead"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import SmartAlbum from "./SmartAlbum"
import MusicPlayer from "../LandingPage/MusicPlayer"

const ImaginePage = () => (
  <Layout type="base">
    <SeoHead />
    <Content>
      <div className="w-full">
        <FadeInWhenVisible
          className="w-full text-white 
        lg:pl-[100px] 
        text-[40px] text-[white] 
        lg:text-left text-center
        font-poppins_italic "
        >
          your smart album contains:
        </FadeInWhenVisible>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 mt-[50px] gap-[50px]">
          <div className="flex justify-center lg:justify-start mt-[10px] lg:pl-[150px]">
            <MusicPlayer />
          </div>
          <div className="w-full flex justify-center lg:justify-start">
            <SmartAlbum />
          </div>
        </div>
      </div>
    </Content>
  </Layout>
)

export default ImaginePage
