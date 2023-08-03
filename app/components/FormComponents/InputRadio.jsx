const InputRadio = ({ title, value, name, checked, handleChange }) => {
  return (
    <label className="flex">
      <input
        type="radio"
        className="peer hidden"
        name={name}
        value={value}
        checked={checked === value}
        onChange={handleChange}
      />
      <div className="cursor-pointer appearance-none text-gray-300 bg-[#1F1F1F] whitespace-nowrap rounded-lg py-1 pt-[7px] px-8 text-[13px] font-medium transition-colors peer-checked:text-[#c532ff]">
        {title}
      </div>
    </label>
  );
};

export default InputRadio;
