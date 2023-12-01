import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className="rounded-lg shadow  m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span className="block text-sm text-white sm:text-center">
          © 2023 LilNait™ {t("title")}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
