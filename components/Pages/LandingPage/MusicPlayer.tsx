import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const MusicPlayer = () => (
  <FadeInWhenVisible>
    <iframe
      src="https://cdn.warpsound.ai/ipfs/QmVYW5vHaV322Kvp2So5ErngP1PrDUneYqo4e9TNygAGSn?playlist-url=https://ipfs.io/ipfs/QmPQsLmsGArK1n9TAfiyoJWdcN2hGGBBpTS7KASAipcAH7/playerlist.json"
      width="326"
      height="326"
      frameBorder="0"
      allow="autoplay"
      title="Xcelencia"
    />
  </FadeInWhenVisible>
)

export default MusicPlayer
