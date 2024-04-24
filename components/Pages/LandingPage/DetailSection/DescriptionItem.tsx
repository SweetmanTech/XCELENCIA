const DescriptionItem = ({ children }) => (
  <div className="flex items-start gap-[10px]">
    <div className="w-[10px] h-[10px] rounded-full bg-[gray] mt-2 md:mt-4" />
    {children}
  </div>
)

export default DescriptionItem
