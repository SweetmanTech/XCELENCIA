import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "@/shared/Media"

const MusicPlayer = () => (
  <FadeInWhenVisible>
    <Media
      link="/images/music.png"
      blurLink="/images/music.png"
      containerClasses="w-[330px] h-[326px]"
    />
  </FadeInWhenVisible>
)

export default MusicPlayer
