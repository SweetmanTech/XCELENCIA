import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "@/shared/Media"

const Bundles = () => (
  <FadeInWhenVisible className="w-full flex justify-center">
    <Media
      link="/images/bundles.png"
      blurLink="/images/bunldes.png"
      containerClasses="w-full aspect-[477/467] md:w-[477px] md:h-[467px]"
    />
  </FadeInWhenVisible>
)

export default Bundles
