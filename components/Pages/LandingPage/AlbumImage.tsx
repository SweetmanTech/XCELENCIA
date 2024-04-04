import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "@/shared/Media"

const AlbumImage = () => (
  <FadeInWhenVisible>
    <Media
      link="/images/album.jpg"
      blurLink="/images/album.jpg"
      containerClasses="w-[326px] aspect-square"
    />
  </FadeInWhenVisible>
)

export default AlbumImage
