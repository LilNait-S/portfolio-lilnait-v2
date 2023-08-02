const IconCard = ({ title, src, alt }) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <figure className="relative flex aspect-square w-full max-w-[15px]">
        <img src={src} alt={alt} className="w-full h-full object-center" />
      </figure>
      <span>{title}</span>
    </div>
  );
};

export default IconCard;
