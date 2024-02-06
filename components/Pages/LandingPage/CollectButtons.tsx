import CollectAllButton from "@/components/CollectAllButton"
import CrossmintButton from "@/components/CrossmintButton"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const CollectButtons = () => (
  <FadeInWhenVisible className="w-full flex justify-center gap-x-[10px]">
    <CollectAllButton />
    <CrossmintButton />
  </FadeInWhenVisible>
)

export default CollectButtons
