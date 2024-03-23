import Content from "@/components/Layout/Content"
import MusicPlayer from "./MusicPlayer"
import CollectButtons from "./CollectButtons"
import DetailSection from "./DetailSection/DetailSection"
import WhatNext from "./WhatNext"

const LiveHome = () => (
  <Content>
    <div className="w-full h-full flex justify-center items-center">
      <div
        className="flex flex-col 
        items-center justify-center gap-[20px]"
      >
        <MusicPlayer />
        <CollectButtons />
        <DetailSection />
        <WhatNext />
      </div>
    </div>
  </Content>
)

export default LiveHome
