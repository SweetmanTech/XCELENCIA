import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Presave from "../PresavePage/Presave"

const Stay = () => (
  <FadeInWhenVisible className="flex flex-col items-center mt-8">
    <p className="text-[32px] text-white font-madeoutersans_bold pb-4">
      Stay notified for future updates
    </p>
    <Presave />
  </FadeInWhenVisible>
)

export default Stay
