import getPrice from "@/lib/getPrice"
import { useState, useEffect } from "react"

const useEthPrice = () => {
  const [ethPrice, setEthPrice] = useState(0)

  useEffect(() => {
    const init = async () => {
      const price = await getPrice()

      setEthPrice(price)
    }

    init()
  }, [])

  return {
    setEthPrice,
    ethPrice,
  }
}

export default useEthPrice
