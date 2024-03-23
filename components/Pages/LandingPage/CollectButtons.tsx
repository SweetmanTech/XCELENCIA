import CollectAllButton from "@/components/CollectAllButton"
import CrossmintButton from "@/components/CrossmintButton"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import SoundCollectButton from "./CollectAllButton"

const CollectButtons = () => (
  <FadeInWhenVisible
    className="w-full flex flex-col md:flex-row justify-center 
  gap-y-[15px] md:gap-y-0 md:gap-x-[10px]"
  >
    <CollectAllButton />
    <SoundCollectButton />
    <CrossmintButton />
  </FadeInWhenVisible>
)

export default CollectButtons
