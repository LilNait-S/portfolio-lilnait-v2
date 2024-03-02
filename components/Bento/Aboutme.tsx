import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { useTranslations } from "next-intl";

const Aboutme = () => {
  const t = useTranslations("About-me");

  return (
    <div className="relative flex flex-col lg:flex-row w-full h-full lg:justify-between justify-around ">
      <div className=" flex flex-col px-4 py-4 lg:p-8 justify-between">
        <h1 className="text-3xl lg:text-4xl purple_gradient font-bold leading-10">
          Sergio Delgado <br />
          <span className="text-white font-bold">Full Stack Developer</span>
        </h1>
        <div className="flex-row flex gap-4 text-gray-400 mt-3 flex-wrap">
          <Link
            href="https://www.linkedin.com/in/sergio-delgado-arenas/"
            target="_blank"
            className="hover:text-purple-600 transition-colors ease-in-out border-purple-600 flex items-center"
          >
            <span className="sr-only">Link to My profile Linkedin</span>
            <BsLinkedin className="h-6 w-6" />
            <span className="ml-2 hidden sm:block">Linkedin</span>
          </Link>
          <Link
            href="https://github.com/LilNait-S"
            target="_blank"
            className="hover:text-purple-600 transition-colors ease-in-out border-purple-600 flex items-center"
          >
            <span className="sr-only">Link to My profile Github</span>
            <AiFillGithub className="h-7 w-7" />
            <span className="ml-2 hidden sm:block">Github</span>
          </Link>
          <Link
            href="mailto:lilnait.santos@gmail.com"
            className="hover:text-purple-600 transition-colors ease-in-out border-purple-600 flex items-center"
          >
            <span className="sr-only">Link to Send a email</span>
            <HiMail className="h-7 w-7" />
            <span className="ml-2 hidden sm:block">Gmail</span>
          </Link>
        </div>
        <p className="text-gray-400 lg:leading-7 mt-2">{t("paragraph")}</p>
      </div>
    </div>
  );
};

export default Aboutme;
