import Content from "@/components/Layout/Content"
import VideoPlayer from "./VideoPlayer"
import ArtworkAlbum from "./ArtworkAlbum"
import MusicPlayer from "./MusicPlayer"
import CollectButtons from "./CollectButtons"
import Bundles from "./Bundles"

const LiveHome = () => (
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
)

export default LiveHome
