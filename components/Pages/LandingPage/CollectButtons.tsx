import CollectAllButton from "@/components/CollectAllButton"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import useBalance from "@/hooks/useBalance"
import CreditCardCheckout from "./CreditCardCheckout"
import useConnectedWallet from "@/hooks/useConnectedWallet"
import { ZORA_PRICE } from "@/lib/consts"
import { parseEther } from "viem"
import { bigint } from "zod"

const CollectButtons = () => {
  const { balance } = useBalance()
  const { connectedWallet } = useConnectedWallet()

  console.log("SWEETS BALANCE", balance)
  const totalPrice = BigInt(ZORA_PRICE)

  const showCreditCard = connectedWallet && balance < totalPrice

  return (
    <FadeInWhenVisible
      className="w-full flex flex-col md:flex-row justify-center 
  gap-y-[15px] md:gap-y-0 md:gap-x-[10px]"
    >
      <div className="flex flex-col justify-center items-center">
        {showCreditCard ? <CreditCardCheckout /> : <CollectAllButton />}
        <div className="text-white">0.01269 ETH ($45)</div>
      </div>
    </FadeInWhenVisible>
  )
}

export default CollectButtons
