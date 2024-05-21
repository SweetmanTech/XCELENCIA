import CollectAllButton from "@/components/CollectAllButton"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const CollectButtons = () => (
  <FadeInWhenVisible
    className="w-full flex flex-col md:flex-row justify-center 
    gap-y-[15px] md:gap-y-0 md:gap-x-[10px]"
  >
    <div className="flex flex-col justify-center items-center">
      <CollectAllButton />
    </div>
  </FadeInWhenVisible>
)

export default CollectButtons
