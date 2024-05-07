import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import ReactPlayer from "react-player"

const Journey = () => {
  const videoId = "yIuDbIeZAqg"

  return (
    <FadeInWhenVisible
      className="font-madeoutersans_bold text-[32px] text-white
        flex flex-col items-center"
    >
      <p className="mb-4">The Journey</p>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}&feature=youtu.be`}
        width={1024}
        height={576}
        playing
      />
    </FadeInWhenVisible>
  )
}

export default Journey
