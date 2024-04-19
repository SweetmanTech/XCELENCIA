const ZoraVideo = () => (
  <div className="w-full aspect-[1/1] flex justify-center items-center">
    {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
    <video src="/images/zora-video.mov" width={444} className="aspect-video" controls />
  </div>
)

export default ZoraVideo
