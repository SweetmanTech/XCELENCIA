const ClipSpan = ({ className = "", children }) => (
  <span
    className={`bg-gradient_1
          bg-clip-text	text-[#00000000] font-bold
          leading-[130%] overflow-visible py-[10px]
          ${className}`}
  >
    {children}
  </span>
)

export default ClipSpan
