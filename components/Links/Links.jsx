import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Links = () => {
  const t = useTranslations("navbar");

  const sidebarLinks = [
    {
      title: "aboutMe.title",
      route: "/",
    },
    {
      title: "work.title",
      route: "#works",
    },
    {
      title: "internships.title",
      route: "#practice",
    },
  ];

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
// {sidebarLinks.map(({ label, route }) => (
//     <li
//       key={label}
//       className="shadow-md "
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <Link href={route}>{label}</Link>
//     </li>
//   ))}
