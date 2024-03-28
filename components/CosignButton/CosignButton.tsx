import usePrivyEthersSigner from "@/hooks/usePrivyEthersSigner"
import { CATALOGCOSIGN_ADDRESS, CATALOG_ID, CHAIN_ID } from "@/lib/consts"
import { BigNumber, Contract } from "ethers"
import { useState } from "react"
import { getPublicClient } from "@/lib/clients"
import cosignAbi from "@/lib/abi/catalog-cosign.json"
import getZoraNextTokenId from "@/lib/getZoraNextTokenId"
import getAccount from "@/lib/tokenbound/getAccount"

const CosignButton = () => {
  const [loading, setLoading] = useState(false)
  const { signer } = usePrivyEthersSigner()
  const handleClick = async () => {
    setLoading(true)
    const publicClient = getPublicClient(CHAIN_ID)
    const tokenPrice = await publicClient.readContract({
      address: CATALOGCOSIGN_ADDRESS as `0x${string}`,
      abi: cosignAbi,
      functionName: "tokenPrice",
    })

    const zoraNextTokenId = await getZoraNextTokenId()
    const tba = getAccount(zoraNextTokenId)

    const contract = new Contract(CATALOGCOSIGN_ADDRESS, cosignAbi, signer)
    const tx = await contract.purchaseToken(BigNumber.from(CATALOG_ID).toBigInt(), 1, tba, tba, {
      value: BigNumber.from(tokenPrice).toString(),
    })

    const receipt = await tx.wait()

    setLoading(false)
    return receipt
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`text-[18px] font-bold uppercase bg-gray rounded-full
      px-[20px] py-[10px]`}
      disabled={loading}
    >
      {loading ? `Loading...` : "Cosign"}
    </button>
  )
}

export default CosignButton
