import { useTranslations } from "next-intl";

const Knowledge = () => {
  const t = useTranslations("Knowledge");
  return (
    <div className="flex flex-col justify-center items-center h-full gap-3">
      <h2 className="text-xl purple_gradient font-bold">{t("web")}</h2>
      <h2 className="text-xl purple_gradient font-bold">UX/UI</h2>
      <h2 className="text-xl purple_gradient font-bold">Frontend</h2>
    </div>
  );
};

export default Knowledge;
