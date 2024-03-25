const DescriptionItem = ({ children }) => (
  <div className="flex items-center gap-[10px]">
    <div className="w-[10px] h-[10px] rounded-full bg-[grey]" />
    {children}
  </div>
)

export default DescriptionItem
