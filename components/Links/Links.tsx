import { sidebarLinks } from "@/constant/navbar";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Links = () => {
  const t = useTranslations("navbar");

  return (
    <nav className="hidden xl:block sm:hidden">
      <ul className="flex [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 ">
        {sidebarLinks.map(({ title, route }) => (
          <li key={title}>
            <Link href={`${route}`}>{t(title)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Links;
