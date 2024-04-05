import { SEO_TITLE } from "@/lib/consts"

const DownloadButton = ({ className = "" }) => {
  const handleClick = () => {
    const filePath = "https://ipfs.io/ipfs/QmToDp7wKCugm2HzA8zcujrFXgnKqsjuLNAYvn5vTaC9Pc"

    const link = document.createElement("a")
    link.href = filePath
    link.download = "ene.zip"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <a
      href="https://ipfs.io/ipfs/QmToDp7wKCugm2HzA8zcujrFXgnKqsjuLNAYvn5vTaC9Pc"
      className={`text-[18px] font-bold uppercase bg-gray rounded-full
px-[20px] py-[10px] max-h-11 ${className}`}
    >
      Download {SEO_TITLE}
    </a>
  )
}

export default DownloadButton
