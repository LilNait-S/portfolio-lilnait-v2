const Country = () => {
  return (
    <div className="relative flex justify-center items-center h-full ">
      <div className="relative">
        <h2 className="relative text-2xl lg:text-4xl font-bold purple_gradient">
          Perú
        </h2>
        <img
          src="/peru.svg"
          className="absolute top-[-5px] right-[-25px] lg:top-6 h-[20px] w-[20px]"
        />
      </div>
    </div>
  );
};

export default Country;
