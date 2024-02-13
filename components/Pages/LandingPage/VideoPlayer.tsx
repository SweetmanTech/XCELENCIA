import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const VideoPlayer = () => (
  <FadeInWhenVisible>
    <video src="/hero.mp4" className="w-[649px] h-[322px]" muted loop autoPlay controls />
  </FadeInWhenVisible>
)

export default VideoPlayer
