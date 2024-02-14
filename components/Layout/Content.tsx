const Content = ({ children, className = "" }) => (
  <div
    className={`w-screen xl:w-[1440px] lg:w-[1280px] md:w-[1024px]
    px-[16px] md:px-0
    pb-[30px] md:pb-0
    flex justify-center ${className}`}
  >
    {children}
  </div>
)

export default Content
