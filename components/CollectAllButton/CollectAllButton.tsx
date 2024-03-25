import useCollectedCheck from "@/hooks/useCollectedCheck"
import useSoundXYZCollect from "@/hooks/useCollectSound"
import useTBAPurchase from "@/hooks/useTBAPurchase"
import { useState } from "react"

export enum COLLECT_STATUS {
  ZORA = "ZORA",
  SOUND = "SOUND.XYZ",
  CATALOG = "CATALOG",
}

const CollectAllButton = ({ className = "" }) => {
  const { purchase, loading: loadingZora } = useTBAPurchase()
  const { loading: loadingXYZ, collectSoundXYZ } = useSoundXYZCollect()
  const loading = loadingXYZ || loadingZora
  const { isCollectedOnZora, isCollectedSoundXYZ, collectedCheck } = useCollectedCheck()
  const [collectStatus, setCollectStatus] = useState(COLLECT_STATUS.ZORA)

  const handleClick = async () => {
    if (!isCollectedOnZora) {
      setCollectStatus(COLLECT_STATUS.ZORA)
      const resZora = await purchase(1)
      if (!resZora || resZora?.error) {
        return
      }
      await collectedCheck()
    }
    if (!isCollectedSoundXYZ) {
      setCollectStatus(COLLECT_STATUS.SOUND)
      const resSound = await collectSoundXYZ()
      if (!resSound || resSound?.error) {
        return
      }
      await collectedCheck()
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`text-[18px] font-bold uppercase bg-gray rounded-full
      px-[20px] py-[10px] ${className}`}
      disabled={loading}
    >
      {loading ? `Collecting on ${collectStatus}...` : "Collect Album"}
    </button>
  )
}

export default CollectAllButton
