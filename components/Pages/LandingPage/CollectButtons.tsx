import CollectAllButton from "@/components/CollectAllButton"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import useEthPrice from "@/hooks/useEthPrice"
import getUsdConversion from "@/lib/getUsdConversion"

const CollectButtons = () => {
  const { ethPrice } = useEthPrice()

  return (
    <FadeInWhenVisible
      className="w-full flex flex-col md:flex-row justify-center 
    gap-y-[15px] md:gap-y-0 md:gap-x-[10px]"
    >
      <div className="flex flex-col justify-center items-center">
        <CollectAllButton />
        <div className="text-white">0.01269 ETH (${getUsdConversion(0.01269, ethPrice)})</div>
      </div>
    </FadeInWhenVisible>
  )
}

export default CollectButtons
