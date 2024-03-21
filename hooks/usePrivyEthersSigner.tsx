import { useEffect, useState } from "react"
import useConnectedWallet from "./useConnectedWallet"

const usePrivyEthersSigner = () => {
  const { metamaskWallet } = useConnectedWallet()
  const [signer, setSigner] = useState(null)

  useEffect(() => {
    const init = async () => {
      const provider = await metamaskWallet.getEthersProvider()
      const ethSigner = provider.getSigner()
      setSigner(ethSigner)
    }

    if (!metamaskWallet) return
    init()
  }, [metamaskWallet])

  return { signer }
}

export default usePrivyEthersSigner
