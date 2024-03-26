import { usePrivy } from "@privy-io/react-auth"
import { createContext, useMemo, useEffect, useContext, useState } from "react"

const UserContext = createContext(null)

const UserProvider = ({ children }) => {
  const [privyEmail, setPrivyEmail] = useState(null)
  const { user, authenticated, ready } = usePrivy()
  const isLoggedByEmail = privyEmail ? true : false
  const isAuthenticated = authenticated && ready

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
      isAuthenticated
    }),
    [privyEmail, isLoggedByEmail, isAuthenticated],
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
