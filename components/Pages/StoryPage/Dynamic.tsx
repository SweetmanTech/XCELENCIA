import Media from "@/shared/Media"

const Dynamic = () => (
  <div className="flex flex-col items-center text-white mt-8 gap-4">
    <p className="text-[32px] font-madeoutersans_bold">El Niño Estrella (Dynamic)</p>
    <Media
      link="/images/1713199216.gif"
      blurLink="/images/1713199216.gif"
      containerClasses="w-[500px] h-[500px] rounded-[20px] overflow-hidden"
    />
    <p className="font-poppins">{`In summer 2023, I launched the "el niño estrella" dynamic NFT.`}</p>
    <p className="font-poppins text-center">
      {`a dynamic collectible that gradually revealed the official album cover art using offchain
        Spotify streaming milestones to trigger changes to the`}
      <br />
      artwork. It was also a membership pass to the emerging world of el niño. This collectible
      kicked off the experience and its only available on
      <br />
      secondary.
    </p>
  </div>
)

export default Dynamic
