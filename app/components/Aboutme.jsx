import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const Aboutme = () => {
  return (
    <div className="flex w-full h-full justify-between">
      <div className=" flex flex-col py-8 px-8 justify-between">
        <div>
          <h1 className="text-3xl font-semibold leading-10">Sergio Delgado</h1>
          <h2 className="font-medium purple_gradient">
            Adaptabilidad | Comunicación asertiva | Creatividad
          </h2>
          <p className="text-gray-400 leading-7 mt-2">
            En búsqueda de oportunidades para mejorar y crecer profesionalmente.
            Siempre estoy dispuesto a enfrentar nuevos desafíos y llevar
            proyectos web emocionantes al siguiente nivel.
          </p>
        </div>
        <div className="flex justify-end ">
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

      <img src="/myphoto.png" className="object-contain h-full rounded-md" />
    </div>
  );
};

export default Aboutme;
