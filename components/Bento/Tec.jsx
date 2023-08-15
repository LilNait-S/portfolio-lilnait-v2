import { tecnologys } from "@/constant/index.js";
import { useTranslations } from "next-intl";

const Tec = () => {
  const tecnologysSorted = tecnologys.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  const t = useTranslations("Tec");

  return (
    <div className="px-4 py-2 lg:px-6 lg:py-4">
      <span className="purple_gradient font-bold text-2xl">{t("title")}</span>
      <div className="grid place-items-center grid-cols-2 lg:grid-cols-6 gap-4 mt-6">
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
