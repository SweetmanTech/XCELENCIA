import Content from "@/components/Layout/Content"
import CollectButtons from "./CollectButtons"
import DetailSection from "./DetailSection/DetailSection"
import WhatNext from "./WhatNext"
import AlbumImage from "./AlbumImage"

const LiveHome = () => (
  <Content>
    <div className="w-full h-full flex justify-center items-center">
      <div
        className="flex flex-col 
        items-center justify-center gap-[20px]"
      >
        <AlbumImage />
        <CollectButtons />
        <DetailSection />
        <WhatNext />
      </div>
    </div>
  </Content>
)

export default LiveHome
