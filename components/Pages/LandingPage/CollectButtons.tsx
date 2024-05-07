import CollectAllButton from "@/components/CollectAllButton"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
<<<<<<< HEAD
import useBalance from "@/hooks/useBalance"
import useConnectedWallet from "@/hooks/useConnectedWallet"
import { ZORA_PRICE } from "@/lib/consts"
import CreditCardCheckout from "./CreditCardCheckout"

const CollectButtons = () => {
  const { balance } = useBalance()
  const { connectedWallet } = useConnectedWallet()
  const totalPrice = BigInt(ZORA_PRICE)
  const showCreditCard = connectedWallet && balance < totalPrice
=======
import useEthPrice from "@/hooks/useEthPrice"
import getUsdConversion from "@/lib/getUsdConversion"

const CollectButtons = () => {
  const { ethPrice } = useEthPrice()
>>>>>>> 03c2d947fe64f646fe7a4a8f7de89a87860d554a

  return (
    <FadeInWhenVisible
      className="w-full flex flex-col md:flex-row justify-center 
<<<<<<< HEAD
  gap-y-[15px] md:gap-y-0 md:gap-x-[10px]"
    >
      <div className="flex flex-col justify-center items-center">
        {showCreditCard ? <CreditCardCheckout /> : <CollectAllButton />}
        <div className="text-white">0.01269 ETH ($45)</div>
=======
    gap-y-[15px] md:gap-y-0 md:gap-x-[10px]"
    >
      <div className="flex flex-col justify-center items-center">
        <CollectAllButton />
        <div className="text-white">0.01269 ETH (${getUsdConversion(0.01269, ethPrice)})</div>
>>>>>>> 03c2d947fe64f646fe7a4a8f7de89a87860d554a
      </div>
    </FadeInWhenVisible>
  )
}

export default CollectButtons
