import { BigNumber } from "ethers"
import { createPublicClient, erc721Abi, http, toHex } from "viem"
import { sepolia } from "viem/chains"
import { useEffect, useMemo, useState } from "react"
import multicallAbi from "@/lib/abi/multicall3.json"
import getMintMulticallCalls from "@/lib/getMintMulticallCalls"
import { CHAIN_ID, DROP_ADDRESS, MULTICALL3_ADDRESS, PRICE } from "@/lib/consts"
import useConnectedWallet from "./useConnectedWallet"
import getTotalSupply from "@/lib/viem/getTotalSupply"
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
      console.log("SWEETS purchasing....")

      const price = BigNumber.from(PRICE).mul(quantity).toString()
      console.log("SWEETS price", price)
      const lastMinted = await getTotalSupply()
      const nextTokenId = (lastMinted + BigInt(1)).toString()
      console.log("SWEETS nextTokenId", nextTokenId)
      const calls = getMintMulticallCalls(nextTokenId, connectedWallet as string, quantity, price)
      console.log("SWEETS calls", calls)
      const hexValue = price
      const response = await sendTransaction(
        MULTICALL3_ADDRESS,
        CHAIN_ID,
        multicallAbi,
        "aggregate3Value",
        calls,
        toHex(price),
      )

      //   const tx = await multicallContract.aggregate3Value(calls, {
      //     value: price,
      //     gasLimit: 250_000,
      //   })
      //   const receipt = await tx.wait()
      //   return receipt
      return response
    } catch (err) {
      console.error(err)
      return false
    }
  }

  return { purchase, totalSupply }
}

export default useTBAPurchase
