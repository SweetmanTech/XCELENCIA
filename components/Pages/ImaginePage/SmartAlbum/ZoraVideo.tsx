const ZoraVideo = () => (
  <div className="w-full aspect-[1/1] flex justify-center items-center">
    {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
    <video
      src="https://cloudflare-ipfs.com/ipfs/QmQ5rJgfLx6vsScm4FJo85SA2RGmCKHSCCGEqFJfoi4L9B/bafybeihpzem3f3bn46rfzrdhwwt6qosfsemkepsipuat67q5kdy46axn7q.mov"
      width={444}
      className="aspect-video"
      controls
    />
  </div>
)

export default ZoraVideo
