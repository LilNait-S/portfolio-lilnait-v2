const IconCard = ({ title, icon }) => {
  return (
    <div className="flex gap-2 items-center justify-center text-sm hover:bg-[#141414] py-1 px-2 rounded-full">
      <div className="w-full h-full flex justify-center items-center">
        {icon}
      </div>
      <span className="whitespace-nowrap">{title}</span>
    </div>
  );
};

export default IconCard;
