import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Presave from "../../PresavePage/Presave"

const WhatNext = () => (
  <>
    <div
      className="w-full flex justify-center text-white 
    text-[26px] md:text-[35px] font-[600] mt-[80px]"
    >
      What to do next?
    </div>
    <div className="w-full grid lg:grid-cols-2 gri-col-1 text-white mt-[50px] gap-[30px]">
      <FadeInWhenVisible className="flex flex-col items-center">
        <p className="text-[26px] md:text-[35px] font-[600] ">Join Community</p>
        <p className="text-[25px] font-copihuew05semi_bold_italic">whatsapp community channel</p>
      </FadeInWhenVisible>
      <FadeInWhenVisible className="flex flex-col items-center">
        <p className="text-[26px] md:text-[35px] font-[600] ">Claim experience</p>
        <p className="text-[25px] font-copihuew05semi_bold_italic">DM xcelencia</p>
      </FadeInWhenVisible>
    </div>
    <FadeInWhenVisible className="flex justify-center w-full">
      <Presave />
    </FadeInWhenVisible>
  </>
)

export default WhatNext
