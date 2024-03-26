import CollectAllButton from "@/components/CollectAllButton"
import CreateSoundEditionButton from "@/components/CreateSoundEditionButton"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import SoundCollectButton from "./SoundCollectButton"

const CollectButtons = () => (
  <FadeInWhenVisible
    className="w-full flex flex-col md:flex-row justify-center 
  gap-y-[15px] md:gap-y-0 md:gap-x-[10px]"
  >
    <CollectAllButton />
    <CreateSoundEditionButton />
    <SoundCollectButton />
  </FadeInWhenVisible>
)

export default CollectButtons
