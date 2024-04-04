import { SEO_TITLE } from "@/lib/consts"

const DownloadButton = ({ className = "" }) => {
  const handleClick = () => {
    const filePath = "/imagine/ene.zip"

    const link = document.createElement("a")
    link.href = filePath
    link.download = "ene.zip"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`text-[18px] font-bold uppercase bg-gray rounded-full
px-[20px] py-[10px] max-h-11 ${className}`}
    >
      Download {SEO_TITLE}
    </button>
  )
}

export default DownloadButton
