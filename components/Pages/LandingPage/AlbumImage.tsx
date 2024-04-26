import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "@/shared/Media"

const AlbumImage = () => (
  <FadeInWhenVisible>
    <Media
      link="/images/1713199350.webp"
      blurLink="/images/album.png"
      containerClasses="w-[326px] aspect-square"
    />
  </FadeInWhenVisible>
)

export default AlbumImage
