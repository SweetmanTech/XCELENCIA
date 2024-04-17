import useConnectedWallet from "@/hooks/useConnectedWallet"
import { CheckoutWithCard } from "@thirdweb-dev/react"
import { useRouter } from "next/router"

const CreditCardCheckout = () => {
  const { connectedWallet: walletAddress } = useConnectedWallet()
  const { push } = useRouter()

  const stylingOptions = {
    colorBackground: "#7d5fb4",
    colorPrimary: "#7d5fb4",
    colorText: "#7d5fb4",
    borderRadius: 6,
    inputBorderColor: "#6613c2",
  }

  return (
    <div className="bg-white rounded rounded-xl p-2">
      <CheckoutWithCard
        clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
        configs={{
          contractId: process.env.NEXT_PUBLIC_THIRDWEB_CONTRACT_ID,
          walletAddress,
          // Mint method (for custom contracts only)
          mintMethod: {
            name: "purchase",
            args: {},
            payment: {
              value: "0.000777 * $QUANTITY",
              currency: "ETH",
            },
          },
        }}
        onPaymentSuccess={() => push("/imagine")}
        options={stylingOptions}
      />
    </div>
  )
}

export default CreditCardCheckout
