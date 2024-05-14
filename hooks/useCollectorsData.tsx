import _ from "lodash"
import { DROP_ADDRESS } from "@/lib/consts"
import getTotalSupply from "@/lib/viem/getTotalSupply"
import { useEffect, useState } from "react"
import useMulticall3Read from "./useMulticall3Read"
import getOwnerOfCall from "@/lib/getOwnerOfCall"
import hexToEthAddress from "@/lib/hexToEthAddress"

const useCollectorsData = () => {
  const [collectors, setCollectors] = useState([])
  const { aggregate3Value } = useMulticall3Read()
  const [owners, setOwners] = useState([])

  useEffect(() => {
    const init = async () => {
      const totalSupply = await getTotalSupply(DROP_ADDRESS)
      const ownerOfCalls = Array.from({ length: parseInt(totalSupply.toString()) }).map((_, i) =>
        getOwnerOfCall(i + 1),
      )

      const response = (await aggregate3Value(ownerOfCalls)) as any
      const ownersOfDrop = response.map((owner, i) => ({
        tokenId: i + 1,
        address: hexToEthAddress(owner.returnData),
      }))
      setOwners(ownersOfDrop)
      const uniqueOwners = _.uniqBy(ownersOfDrop, "address")
      setCollectors(uniqueOwners)
    }

    init()
  }, [])

  return {
    collectors,
    owners,
  }
}

export default useCollectorsData
