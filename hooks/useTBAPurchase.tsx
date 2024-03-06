import { BigNumber } from "ethers"
import { numberToHex } from "viem"
import { useEffect, useState } from "react"
import multicallAbi from "@/lib/abi/multicall3.json"
import getMintMulticallCalls from "@/lib/getMintMulticallCalls"
import getTotalSupply from "@/lib/viem/getTotalSupply"
import { CHAIN_ID, MULTICALL3_ADDRESS, PRICE } from "@/lib/consts"
import useConnectedWallet from "./useConnectedWallet"
import usePrivySendTransaction from "./usePrivySendTransaction"

const useTBAPurchase = () => {
  const { connectedWallet } = useConnectedWallet()
  const { sendTransaction } = usePrivySendTransaction()
  const [totalSupply, setTotalSupply] = useState(null)

  useEffect(() => {
    const init = async () => {
      const response = await getTotalSupply()
      setTotalSupply(response)
    }
    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const purchase = async (quantity: number) => {
    try {
      const price = BigNumber.from(PRICE).mul(quantity).toString()
      const lastMinted = await getTotalSupply()
      const nextTokenId = (lastMinted + BigInt(1)).toString()
      const calls = getMintMulticallCalls(
        nextTokenId,
        connectedWallet as string,
        quantity,
        price,
      ) as any
      const hexValue = numberToHex(BigInt(price))
      const response = await sendTransaction(
        MULTICALL3_ADDRESS,
        CHAIN_ID,
        multicallAbi,
        "aggregate3Value",
        [calls],
        hexValue,
        "Collect the Album",
        "El Nino Estrello",
      )
      return response
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      return false
    }
  }

  return { purchase, totalSupply }
}

export default useTBAPurchase
