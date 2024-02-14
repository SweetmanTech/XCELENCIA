import { CHAIN_ID } from "@/lib/consts"
import getNFTsForContract from "@/lib/getNFTsForContract"
import { useEffect, useState } from "react"

const useZoraDropData = () => {
  const zoraDropAddress = process.env.NEXT_PUBLIC_DROP_ADDRESS

  const [drops, setDrops] = useState([])

  useEffect(() => {
    const init = async () => {
      const response = await getNFTsForContract(zoraDropAddress, CHAIN_ID)
      const { error } = response as any
      if (error) return

      setDrops(response.nfts)
    }

    init()
  }, [])

  console.log("ZIAD", drops)

  return {
    drops,
  }
}

export default useZoraDropData
