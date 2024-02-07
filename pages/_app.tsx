import "../styles/globals.css"
import "react-toastify/dist/ReactToastify.css"
import "@rainbow-me/rainbowkit/styles.css"

import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import { SessionProvider } from "next-auth/react"
import React from "react"

import { RainbowKitProvider, getDefaultWallets, connectorsForWallets } from "@rainbow-me/rainbowkit"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import { goerli, mainnet } from "@wagmi/core/chains"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import { ThemeProvider } from "../providers/ThemeProvider"

const myChains = [process.env.NEXT_PUBLIC_TESTNET ? goerli : mainnet]
const { chains, publicClient, webSocketPublicClient } = configureChains(myChains, [
  alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY }),
  publicProvider(),
])

const { wallets } = getDefaultWallets({
  appName: "XCELENCIA",
  projectId: "68c5ce6a0bf63be0182de421f19951b8",
  chains,
})

const connectors = connectorsForWallets(wallets)
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider modalSize="compact" chains={chains}>
        <ThemeProvider>
          <SessionProvider>
            <Component {...pageProps} />
            <ToastContainer />
          </SessionProvider>
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
export default MyApp
