import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import DescriptionItem from "./DescriptionItem"

const Included = () => (
  <FadeInWhenVisible className="text-[white] text-[26px]">
    Included
    <div>
      <DescriptionItem>15 songs as collectibles</DescriptionItem>
      <DescriptionItem>Each with their own unique cover art</DescriptionItem>
      <DescriptionItem>Interactive music player</DescriptionItem>
      <DescriptionItem>Liner notes</DescriptionItem>
      <DescriptionItem>Journey video</DescriptionItem>
      <DescriptionItem>Claim 1 unique experience</DescriptionItem>
      <DescriptionItem>High Q downloads</DescriptionItem>
      <DescriptionItem>Discount code for merch store</DescriptionItem>
    </div>
  </FadeInWhenVisible>
)

export default Included
