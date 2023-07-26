import { tecnologys } from "@/constant/index.js";

const Tec = () => {

  const tecnologysSorted = tecnologys.sort((a, b) => a.title.localeCompare(b.title));
  return (
    <div className="px-6 py-4">
      <span className="purple_gradient font-bold text-2xl">Tecnologías</span>
      <div className="flex gap-8 flex-wrap mt-4 justify-center ">
        {tecnologysSorted.map(({ title, img, alt }) => (
          <div
            key={title}
            className="flex flex-col justify-center items-center "
          >
            <img src={img} alt={alt} className="h-16 w-16 p-3" />
            <span className="text-xs font-light">{title}</span>
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default Tec;
