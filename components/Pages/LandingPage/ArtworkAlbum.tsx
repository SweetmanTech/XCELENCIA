import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "@/shared/Media"

const ArtworkAlbum = () => (
  <FadeInWhenVisible>
    <Media
      link="/images/album.jpg"
      blurLink="/images/album.jpg"
      containerClasses="w-[325px] h-[326px]"
    />
  </FadeInWhenVisible>
)

export default ArtworkAlbum
