import createTweet from "@/lib/createTweet"
import createWarpCast from "@/lib/createWarpCast"
import Icon from "@/shared/Icon"

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
                bg-black flex justify-center items-center"
        onClick={handleWarpCastClick}
      >
        <Icon name="cast" color="white" size={20} raw />
      </button>
    </div>
  )
}

export default SocialShare
