import Layout from "@/components/Layout"
import Content from "@/components/Layout/Content"
import SeoHead from "@/components/SeoHead"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import { useCollectionProvider } from "@/providers/CollectionProvider"
import DownloadButton from "./DownloadButton"
import SmartAlbum from "../LandingPage/SmartAlbum"

const ImaginePage = () => {
  const { isCollectedZora } = useCollectionProvider()

  return (
    <Layout type="base">
      <SeoHead />
      <Content>
        {isCollectedZora && (
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
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 mt-6">
              <div className="flex justify-center">
                <SmartAlbum />
              </div>
              <div className="flex justify-center items-center">
                <DownloadButton />
              </div>
            </div>
          </div>
        )}
      </Content>
    </Layout>
  )
}

export default ImaginePage
