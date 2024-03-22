import Icon from "@/shared/Icon"

const Footer = () => (
  <div className="flex w-full justify-center gap-[20px] py-[20px]">
    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
    <a href="https://www.instagram.com/xcelencia" target="_blank" rel="noreferrer">
      <Icon name="instagram" color="white" raw size={40} />
    </a>
    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
    <a href="https://twitter.com/xcelencia" target="_blank" rel="noreferrer">
      <Icon name="twitter" color="white" raw size={40} />
    </a>
  </div>
)

export default Footer
