import useCheckCollected from "@/hooks/useCheckCollected"
import { createContext, useMemo, useContext } from "react"

const CollectionContext = createContext(null)

const CollectionProvider = ({ children }) => {
  const collectedData = useCheckCollected()

  const value = useMemo(
    () => ({
      ...collectedData,
    }),
    [collectedData],
  )

  return <CollectionContext.Provider value={value}>{children}</CollectionContext.Provider>
}

export const useCollectionProvider = () => {
  const context = useContext(CollectionContext)
  if (!context) {
    throw new Error("useCollectionProvider must be used within a CollectionProvider")
  }
  return context
}

export default CollectionProvider
