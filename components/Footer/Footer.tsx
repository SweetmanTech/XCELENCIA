import Icon from "@/shared/Icon"

const Footer = () => (
  <div className="flex w-full justify-center gap-[20px] py-[20px]">
    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
      <Icon name="instagram" color="white" raw size={40} />
    </a>
    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
      <Icon name="twitter" color="white" raw size={40} />
    </a>
  </div>
)

export default Footer
