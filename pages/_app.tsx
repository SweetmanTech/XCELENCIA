import "../styles/globals.css"
import "react-toastify/dist/ReactToastify.css"

import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import { SessionProvider } from "next-auth/react"
import React from "react"

import { type PrivyClientConfig, PrivyProvider } from "@privy-io/react-auth"
import UserProvider from "@/providers/UserProvider"
import CollectionProvider from "@/providers/CollectionProvider"
import { AirstackProvider } from "@airstack/airstack-react"
import { ThemeProvider } from "../providers/ThemeProvider"

const privyConfig: PrivyClientConfig = {
  loginMethods: ["email", "wallet"],
  appearance: {
    theme: "dark",
    accentColor: "#FFFFFF",
    logo: "/images/album.jpg",
  },
  embeddedWallets: {
    createOnLogin: "all-users",
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AirstackProvider apiKey={process.env.NEXT_PUBLIC_AIRSTACK_API_KEY ?? ""}>
      <PrivyProvider appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID} config={privyConfig}>
        <UserProvider>
          <CollectionProvider>
            <ThemeProvider>
              <SessionProvider>
                <Component {...pageProps} />
                <ToastContainer />
              </SessionProvider>
            </ThemeProvider>
          </CollectionProvider>
        </UserProvider>
      </PrivyProvider>
    </AirstackProvider>
  )
}
export default MyApp
