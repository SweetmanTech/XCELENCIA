import { useEffect, useState } from "react"

export enum SCREEN {
  LOADING = "LOADING",
  COUNTDOWN = "COUNTDOWN",
  COLLECT = "COLLECT",
}
const useCountDown = () => {
  const liveDay = "04 Apr 2024 00:30:00 EST"
  const [screenMode, setScreenMode] = useState(SCREEN.LOADING)

  const getTime = () => {
    const offset = Date.parse(liveDay) - Date.now()
    return offset
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const offset = getTime()
      setScreenMode(() => (offset <= 0 ? SCREEN.COLLECT : SCREEN.COUNTDOWN))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return {
    screenMode,
  }
}

export default useCountDown
