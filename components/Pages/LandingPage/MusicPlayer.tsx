import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const MusicPlayer = () => (
  <FadeInWhenVisible>
    {/* <Media
      link="/images/music.png"
      blurLink="/images/music.png"
      containerClasses="w-[330px] h-[326px]"
    /> */}
    <iframe
      src="https://cdn.warpsound.ai/ipfs/QmVYW5vHaV322Kvp2So5ErngP1PrDUneYqo4e9TNygAGSn?playlist-url=https://bafkreidsekbryzcxjdtwwvvjm7u6iligrkni3x3snqicwt452wz5dpadzi.ipfs.nftstorage.link/"
      width="100%"
      height="400"
      frameBorder="0"
      allow="autoplay"
      title="Xcelencia"
    />
  </FadeInWhenVisible>
)

export default MusicPlayer
