const IconCard = ({ title, icon }) => {
  return (
    <div className="flex gap-2 items-center justify-center text-sm">
      <div className="w-full h-full flex justify-center items-center">
        {icon}
      </div>
      <span className="whitespace-nowrap">{title}</span>
    </div>
  );
};

export default IconCard;
