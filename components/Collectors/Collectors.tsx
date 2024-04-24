import useCollectorsData from "@/hooks/useCollectorsData"
import PfpImage from "../PfpImage"

const Collectors = () => {
  const { collectors } = useCollectorsData()

  return (
    <>
      {collectors.map((collector) => (
        <PfpImage key={collector.address} collector={collector.address} />
      ))}
    </>
  )
}

export default Collectors
