import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const Aboutme = () => {
  return (
    <div className="relative flex flex-col lg:flex-row w-full h-full lg:justify-between justify-around ">
      <div className=" flex flex-col px-4 py-4 lg:p-8 justify-between">
        <div className="relative">
          <h1 className="text-xl lg:text-3xl font-semibold leading-10">
            Sergio Delgado
          </h1>
          <h2 className="text-xs lg:text-base font-medium purple_gradient">
            Adaptabilidad | Comunicación asertiva | Creatividad
          </h2>
          <p className="text-xs lg:text-base text-gray-400 lg:leading-7 mt-2">
            En búsqueda de oportunidades para mejorar y crecer profesionalmente.
            Siempre estoy dispuesto a enfrentar nuevos desafíos y llevar
            proyectos web emocionantes al siguiente nivel.
          </p>
        </div>
        <div className="flex-col lg:flex-row justify-end hidden lg:flex">
          <Link href="/" className="hover:border-b-4 border-purple-600">
            <HiMail className="h-12 w-12 p-2" />
          </Link>
          <Link href="/" className="hover:border-b-4 border-purple-600">
            <BsLinkedin className="h-12 w-12 p-3" />
          </Link>
          <Link href="/" className="hover:border-b-4 border-purple-600">
            <AiFillGithub className="h-12 w-12 p-2" />
          </Link>
        </div>
      </div>

      <div className="flex justify-center gap-10 lg:hidden">
        <div className="flex flex-col lg:flex-row justify-end bottom-0">
          <Link href="/" className="hover:border-b-4 border-purple-600">
            <HiMail className="h-12 w-12 p-2" />
          </Link>
          <Link href="/" className="hover:border-b-4 border-purple-600">
            <BsLinkedin className="h-12 w-12 p-3" />
          </Link>
          <Link href="/" className="hover:border-b-4 border-purple-600">
            <AiFillGithub className="h-12 w-12 p-2" />
          </Link>
        </div>
        <img
          src="/myphoto.png"
          className="object-contain h-full w-full max-w-[90px] max-h-40 lg:max-h-72 rounded-md"
        />
      </div>

      <img
        src="/myphoto.png"
        className="object-cover h-full w-full max-w-[164px] rounded-md hidden lg:block"
      />
    </div>
  );
};

export default Aboutme;
