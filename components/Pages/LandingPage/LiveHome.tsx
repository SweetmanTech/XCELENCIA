import Content from "@/components/Layout/Content"
import DetailSection from "./DetailSection/DetailSection"
import AlbumImage from "./AlbumImage"

const LiveHome = () => (
  <Content>
    <div className="w-full h-full flex justify-center items-center">
      <div
        className="flex flex-col 
        items-center justify-center gap-[20px]"
      >
        <AlbumImage />
        <DetailSection />
      </div>
    </div>
  </Content>
)

export default LiveHome
