import CollectAllButton from "@/components/CollectAllButton"
import CosignButton from "@/components/CosignButton"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const CollectButtons = () => (
  <FadeInWhenVisible
    className="w-full flex flex-col md:flex-row justify-center 
  gap-y-[15px] md:gap-y-0 md:gap-x-[10px]"
  >
    <CollectAllButton />
    <CosignButton />
  </FadeInWhenVisible>
)

export default CollectButtons
