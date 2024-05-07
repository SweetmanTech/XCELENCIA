const Content = ({ children, className = "" }) => (
  <div
    className={`w-screen xl:w-[1280px] lg:w-[1024px] md:w-[768px]
    px-[16px] md:px-0
    pb-[30px] md:pb-0
    flex justify-center ${className}`}
  >
    {children}
  </div>
)

export default Content
