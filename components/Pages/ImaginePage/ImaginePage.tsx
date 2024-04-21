import Layout from "@/components/Layout"
import Content from "@/components/Layout/Content"
import SeoHead from "@/components/SeoHead"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import { useCollectionProvider } from "@/providers/CollectionProvider"
import Script from "next/script"
import DownloadButton from "./DownloadButton"
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
            lg:pl-[100px] 
            text-[40px] text-[white] 
            lg:text-left text-center
            font-poppins_italic "
            >
              your smart album contains:
            </FadeInWhenVisible>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 mt-[50px] gap-[50px]">
              <div
                className="flex items-center mt-[10px] lg:pl-[150px]
              flex-col gap-4"
              >
                <SmartAlbum />
                <DownloadButton />
              </div>
              <div className="w-full justify-center flex">
                <Script src="https://assets.calendly.com/assets/external/widget.js" async />
                <div
                  className="calendly-inline-widget w-[444px] h-full"
                  data-url="https://calendly.com/xcelencia/30min"
                />
              </div>
            </div>
          </div>
        )}
      </Content>
    </Layout>
  )
}

export default ImaginePage
