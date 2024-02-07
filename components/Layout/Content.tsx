const Content = ({ children, className = "" }) => (
  <div
    className={`w-screen xl:w-[1440px] lg:w-[1280px] md:w-[1024px]
            flex justify-center ${className}`}
  >
    {children}
  </div>
)

export default Content
