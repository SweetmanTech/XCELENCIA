import OwnedXcelencia from "./OwnedXcelencia"
import Description from "./Description"

const DetailSection = () => (
  <div className="mt-[80px] grid grid-cols-2 w-full gap-[80px]">
    <div className="mt-[20px]">
      <OwnedXcelencia />
    </div>
    <div>
      <Description />
    </div>
  </div>
)

export default DetailSection
