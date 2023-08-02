import { tecnologys } from "@/constant/index.js";

const Tec = () => {
  const tecnologysSorted = tecnologys.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="px-4 py-2 lg:px-6 lg:py-4">
      <span className="purple_gradient font-bold text-2xl">Tecnologías</span>
      <div className="flex gap-6 lg:gap-8 flex-wrap mt-4 justify-center lg:mt-4">
        {tecnologysSorted.map(({ title, icon }) => (
          <div
            key={title}
            className="flex flex-col justify-center items-center "
          >
            <div className="h-full w-full p-3">{icon}</div>
            <span className="text-xs font-light">{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tec;
