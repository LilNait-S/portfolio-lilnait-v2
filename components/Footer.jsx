import { useTranslations } from "next-intl";

const Footer = () => {

  const t = useTranslations("footer");
  return (
    <footer className="rounded-lg shadow  m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
       
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            LilNait™
          </a>
          . {t("title")}.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
