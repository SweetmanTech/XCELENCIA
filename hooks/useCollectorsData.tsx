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

  useEffect(() => {
    const init = async () => {
      const totalSupply = await getTotalSupply(DROP_ADDRESS)
      const ownerOfCalls = Array.from({ length: parseInt(totalSupply.toString()) }).map((_, i) =>
        getOwnerOfCall(i + 1),
      )

      const response = (await aggregate3Value(ownerOfCalls)) as any
      const owners = response.map((owner) => hexToEthAddress(owner.returnData))
      const uniqueOwners = _.uniq(owners)
      setCollectors(uniqueOwners)
    }

    init()
  }, [])

  return {
    collectors,
  }
}

export default useCollectorsData
