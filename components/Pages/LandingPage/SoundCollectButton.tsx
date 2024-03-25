import useSoundXYZCollect from "@/hooks/useCollectSound"

const SoundCollectButton = ({ className = "" }) => {
  const { loading, collectSoundXYZ } = useSoundXYZCollect()

  return (
    <button
      type="button"
      onClick={collectSoundXYZ}
      className={`text-[18px] font-bold uppercase bg-gray rounded-full
      px-[20px] py-[10px] ${className}`}
      disabled={loading}
    >
      {loading ? "Collecting..." : "Sound SDK Collect"}
    </button>
  )
}

export default SoundCollectButton
