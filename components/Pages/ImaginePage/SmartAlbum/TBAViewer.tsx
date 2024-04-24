import _ from "lodash"
import useCollectorsData from "@/hooks/useCollectorsData"
import useConnectedWallet from "@/hooks/useConnectedWallet"
import { CHAIN_ID, DROP_ADDRESS } from "@/lib/consts"

const TBAViewer = () => {
  const { owners } = useCollectorsData()
  const { connectedWallet } = useConnectedWallet()
  const lastCollectInfo = _.findLast(owners, { address: connectedWallet.toLowerCase() })

  return (
    <>
      {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
      {lastCollectInfo && (
        <iframe
          src={`https://iframe-tokenbound.vercel.app/${DROP_ADDRESS}/${lastCollectInfo?.tokenId}/${CHAIN_ID}`}
          className="aspect-[1/1] w-[444px]"
          title="Xcelencia"
        />
      )}
    </>
  )
}

export default TBAViewer
