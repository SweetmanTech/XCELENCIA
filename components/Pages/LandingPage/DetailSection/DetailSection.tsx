import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import OwnedXcelencia from "./OwnedXcelencia"
import Description from "./Description"

const DetailSection = () => (
  <div className="mt-[80px] grid grid-cols-1 2xls:grid-cols-2 w-full gap-[80px]">
    <FadeInWhenVisible className="mt-[20px]">
      <OwnedXcelencia />
    </FadeInWhenVisible>
    <div>
      <Description />
    </div>
  </div>
)

export default DetailSection
