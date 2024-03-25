import ClipSpan from "@/components/ClipSpan"
import Icon from "@/shared/Icon"
import Media from "@/shared/Media"

const OwnedXcelencia = () => (
  <>
    <p
      className="md:pl-[40px] text-[25px] font-hedvig font-bold text-[white]
    text-center md:text-left"
    >
      El Niño Estrella - Fan Edition
    </p>
    <div className="mt-[30px] flex flex-col items-center gap-[15px] md:flex-row">
      <div>
        <Media
          link="/images/album.png"
          blurLink="/images/bunldes.png"
          containerClasses="aspect-[1/1] w-[300px]"
        />
        <p className="text-white font-madeoutersans_bold text-[30px]">ENE #420</p>
        <div className="flex gap-[10px] items-center">
          <Icon name="wallet" size={30} raw />
          <ClipSpan>OWNED BY FAN.ETH</ClipSpan>
        </div>
      </div>
      <div className="mt-[80px]">
        <Media
          link="/images/bundles1.png"
          blurLink="/images/bunldes.png"
          containerClasses="aspect-[286/397] w-[286px]"
        />
      </div>
    </div>
  </>
)

export default OwnedXcelencia
