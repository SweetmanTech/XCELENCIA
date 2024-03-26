import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import DescriptionItem from "./DescriptionItem"

const WhyCollect = () => (
  <FadeInWhenVisible className="mt-[24px] text-[white] text-[26px]">
    Why Collect?
    <div>
      <DescriptionItem>Support indie music</DescriptionItem>
      <DescriptionItem>Prove you were here first or previously</DescriptionItem>
      <DescriptionItem>
        Collect to get unique experiences now and in <br />
        the future
      </DescriptionItem>
      <DescriptionItem>Your support will let me finish the trilogy</DescriptionItem>
    </div>
  </FadeInWhenVisible>
)

export default WhyCollect
