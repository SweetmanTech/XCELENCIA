import Layout from "@/components/Layout"
import Content from "@/components/Layout/Content"
import SeoHead from "@/components/SeoHead"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import { useCollectionProvider } from "@/providers/CollectionProvider"
import DownloadButton from "./DownloadButton"
import SocialShare from "./SocialShare"
import SmartAlbum from "./SmartAlbum"

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
            text-[40px] text-[white] text-center
            font-poppins_italic "
            >
              your smart album contains:
            </FadeInWhenVisible>
            <div className="w-full mt-[50px] gap-[50px]">
              <div
                className="flex items-center mt-[10px] lg:pl-[150px]
              flex-col gap-4"
              >
                <SmartAlbum />
                <DownloadButton />
                <SocialShare />
              </div>
            </div>
          </div>
        )}
      </Content>
    </Layout>
  )
}

export default ImaginePage
