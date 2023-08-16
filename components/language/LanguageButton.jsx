import { useState } from "react";
import { IconLanguage } from "../Icons";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";


const LanguageButton = () => {
   const t = useTranslations('len');
  const [language, setLanguage] = useState(false);

  const toggleLanguage = () => {
    setLanguage(!language);
  };

  return (
    <div className="relative flex justify-center items-center h-full">
      <button onClick={toggleLanguage} className="relative">
        <IconLanguage height="27" width="27" />
      </button>

      {language && (
        <div className="absolute flex flex-col top-8 right-0 bg-[#141414] p-2 rounded-lg">
          <Link
            href="/"
            locale="en"
            onClick={toggleLanguage}
            className="py-2 px-4 bg-[#141414]"
          >
            {t("en")}
          </Link>
          <Link
            href="/"
            locale="es"
            onClick={toggleLanguage}
            className="py-2 px-4 bg-[#141414]"
          >
            {t("es")}
          </Link>
        </div>
      )}
    </div>
  );
};

export default LanguageButton;
