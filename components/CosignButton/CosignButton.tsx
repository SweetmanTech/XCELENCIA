import usePrivyEthersSigner from "@/hooks/usePrivyEthersSigner"
import { CATALOGCOSIGN_ADDRESS, CATALOG_PRICE } from "@/lib/consts"
import { BigNumber, Contract } from "ethers"
import { useState } from "react"
import catalogAbi from '@/lib/abi/catalog-cosign.json'

const CosignButton = () => {
    const [loading, setLoading] = useState(false)
    const {signer} = usePrivyEthersSigner()
    const handleClick = async () => {
        setLoading(true)
        const contract = new Contract(CATALOGCOSIGN_ADDRESS, catalogAbi, signer)
        const tx = await contract.purchaseToken(
            BigNumber.from("93966592039570463393654395010869194129977790080740116793321399200171658575873").toBigInt(),
            1,
            "0x51027631B9DEF86e088C33368eC4E3A4BE0aD264",
            "0x51027631B9DEF86e088C33368eC4E3A4BE0aD264",
            {
                value: BigNumber.from(CATALOG_PRICE).toString()
            }
        )

        const receipt = await tx.wait()

        return receipt
        setLoading(false)
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