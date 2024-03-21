import Script from "next/script"
import { useState } from "react"

const Presave = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <div className="w-[600px]">
      <Script
        src="https://embed.laylo.com/laylo-sdk.js"
        strategy="afterInteractive"
        onLoad={() => setIsLoaded(true)}
      />
      {isLoaded && (
        <iframe
          title="Counter Down"
          id="laylo-drop-d6tew"
          frameBorder={0}
          scrolling="no"
          src="https://embed.laylo.com?dropId=d6tew&color=FF7300&minimal=false&theme=light"
          allow="web-share"
          allowTransparency
          className="h-[100%] w-[100%]"
        />
      )}
    </div>
  )
}

export default Presave
