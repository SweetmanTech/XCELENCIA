import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import DescriptionItem from "./DescriptionItem"

const Included = () => (
  <FadeInWhenVisible className="text-[white] text-[18px] md:text-[26px]">
    El Niño Estrella is a multimedia experience
    <br />
    <br />
    The smart album is a limited edition digital box set that contains:
    <div>
      <DescriptionItem>14 Songs</DescriptionItem>
      <DescriptionItem>Interactive music player</DescriptionItem>
      <DescriptionItem>Liner notes graphic</DescriptionItem>
      <DescriptionItem>Journey video</DescriptionItem>
      <DescriptionItem>Concept Art Booklet</DescriptionItem>
      <DescriptionItem>High Q downloads</DescriptionItem>
      <DescriptionItem>Discount code for merch store</DescriptionItem>
    </div>
  </FadeInWhenVisible>
)

export default Included
