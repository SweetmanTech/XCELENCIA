import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "@/shared/Media"

const VideoPlayer = () => (
  <FadeInWhenVisible>
    <Media
      link="/images/video.png"
      blurLink="/images/video.png"
      containerClasses="w-[649px] h-[322px]"
    />
  </FadeInWhenVisible>
)

export default VideoPlayer
