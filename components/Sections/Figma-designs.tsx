import { imgsDesigns } from "@/constant/designs";
import { useTranslations } from "next-intl";


const FigmaDesigns = () => {
  const t = useTranslations("designs");
  return (
    <section id="designs" className="flex flex-col mt-28 rounded-xl gap-5">
      <h2 className="text-3xl font-bold">{t("title")}</h2>
      <div className="columns-2 lg:columns-3 sm:gap-8 mt-8">
        {imgsDesigns.map((entry) => (
          <img
            key={entry.src}
            src={entry.src}
            alt={entry.alt}
            className="rounded-lg mb-4 sm:mb-8"
          />
        ))}
      </div>
    </section>
  );
};

export default FigmaDesigns;
