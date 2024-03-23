import Media from "@/shared/Media"

const OwnedXcelencia = () => (
  <>
    <p className="pl-[40px] text-[25px] font-hedvig font-bold text-[white]">
      El niño estrelló - Fan Edition
    </p>
    <div className="mt-[30px] flex gap-[15px]">
      <div>
        <Media
          link="/images/album.png"
          blurLink="/images/bunldes.png"
          containerClasses="aspect-[1/1] w-[300px]"
        />
        <p className="text-white text-[30px]">ENE #420</p>
        <div>OWNED BY FAN.ETH</div>
      </div>
      <div className="mt-[80px]">
        <Media
          link="/images/bundles1.png"
          blurLink="/images/bunldes.png"
          containerClasses="w-full aspect-[286/397] w-[286px]"
        />
      </div>
    </div>
  </>
)

export default OwnedXcelencia
