import useConnectedWallet from "@/hooks/useConnectedWallet"
import getIpfsLink from "@/lib/getIpfsLink"
import { useQuery } from "@airstack/airstack-react"
import { usePrivy } from "@privy-io/react-auth"
import { createContext, useMemo, useEffect, useContext, useState } from "react"

const UserContext = createContext(null)

const pfpQuery = `query MyQuery($userAddress: Address) {
  Socials(input: {filter: {userAssociatedAddresses: {_eq: $userAddress}}, blockchain: ethereum}) {
    Social {
      dappName
      profileName
      profileImage
      userAddress
    }
  }
}`

const UserProvider = ({ children }) => {
  const [privyEmail, setPrivyEmail] = useState(null)
  const { user, authenticated, ready } = usePrivy()
  const isLoggedByEmail = privyEmail ? true : false
  const { connectedWallet } = useConnectedWallet()
  const isAuthenticated = authenticated && ready
  const { data } = useQuery(pfpQuery, { userAddress: connectedWallet }, { cache: true })

  const profileImage = useMemo(() => {
    if (!data?.Socials?.Social) return
    const pfpLinks = data.Socials.Social.filter((item) => item?.profileImage)
    if (!pfpLinks?.length)  return
    return getIpfsLink(pfpLinks[0]?.profileImage)
  }, [data])

  useEffect(() => {
    if (user?.email?.address) {
      setPrivyEmail(user.email.address)
      return
    }

    setPrivyEmail(null)
  }, [user])

  const value = useMemo(
    () => ({
      privyEmail,
      isLoggedByEmail,
      isAuthenticated,
      profileImage
    }),
    [privyEmail, isLoggedByEmail, isAuthenticated, profileImage],
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUserProvider = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUserProvider must be used within a UserProvider")
  }
  return context
}

export default UserProvider
