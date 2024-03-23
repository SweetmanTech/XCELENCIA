import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "@/shared/Media"

const SmartAlbum = () => (
  <FadeInWhenVisible className="grid grid-cols-1 xs:grid-cols-2 gap-[30px]">
    <Media
      link="/images/album_1.png"
      blurLink="/images/bunldes.png"
      containerClasses="aspect-[1/1] w-[200px]"
    />
    <Media
      link="/images/album_2.png"
      blurLink="/images/bunldes.png"
      containerClasses="aspect-[1/1] w-[200px]"
    />
    <Media
      link="/images/album_3.png"
      blurLink="/images/bunldes.png"
      containerClasses="aspect-[1/1] w-[200px]"
    />
    <Media
      link="/images/album_4.png"
      blurLink="/images/bunldes.png"
      containerClasses="aspect-[1/1] w-[200px]"
    />
  </FadeInWhenVisible>
)

export default SmartAlbum
