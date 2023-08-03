import { IconPeru } from "../Icons/Country";

const Country = () => {
  return (
    <div className="relative flex justify-center items-center h-full ">
    <div className="relative">
      <h2 className="relative text-2xl lg:text-4xl font-bold purple_gradient">
        Perú
      </h2>
      <div className="absolute top-[-15px] right-[-35px] ">
        <IconPeru />
      </div>
    </div>
  </div>
  );
};

export default Country;
