import createTweet from "@/lib/createTweet"
import createWarpCast from "@/lib/createWarpCast"
import Icon from "@/shared/Icon"
import Media from "@/shared/Media"

const SocialShare = () => {
  const handleTweetClick = () => {
    createTweet(`I just collected El Niño Estrella by @xcelencia`)
  }

  const handleWarpCastClick = () => {
    createWarpCast(`I just collected El Niño Estrella by @xcelencia`)
  }

  return (
    <div className="w-full flex justify-center gap-2">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        type="button"
        className="w-[40px] aspect-[1/1] rounded-full
                bg-black flex justify-center items-center"
        onClick={handleTweetClick}
      >
        <Icon name="twitter" color="white" size={20} raw />
      </button>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        type="button"
        className="w-[40px] aspect-[1/1] rounded-full
                bg-pink_1 flex justify-center items-center"
        onClick={handleWarpCastClick}
      >
        <Media
          link="/images/warpcast.svg"
          blurLink="/images/warpcast.png"
          containerClasses="w-[20px] aspect-[1/1]"
        />
      </button>
    </div>
  )
}

export default SocialShare
