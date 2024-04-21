import usePfpImage from "@/hooks/usePfpImage"
import Media from "@/shared/Media"

const PfpImage = ({ collector }) => {
  const { pfpImage } = usePfpImage(collector)

  return (
    <Media
      link={pfpImage || "/images/album.jpg"}
      blurLink={pfpImage || "/images/album.jpg"}
      containerClasses="w-[100px] aspect-[1/1] !overflow-hidden"
    />
  )
}
export default PfpImage
