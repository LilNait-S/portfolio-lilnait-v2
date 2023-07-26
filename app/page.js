"use client";

import { HiMail } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

import Link from "next/link";
import { tecnologys } from "@/constant/index.js";
import Hour from "./components/Hour";
import Twitter from "./components/Twitter";
import LargeDate from "./components/LargeDate";
import Tec from "./components/Tec";
import Aboutme from "./components/Aboutme";

export default function Home() {
  return (
    <div className="py-16 max-w-[1180px] mx-auto ">
      <div className="grid auto-rows-[150px] grid-cols-8 gap-5">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`${i === 0 ? "row-span-2 col-span-6" : ""}
            ${i === 1 || i === 6 || i === 8 ? "row-span-1 col-span-2" : ""} 
            ${i === 2 ? "row-span-3 col-span-2" : ""} 
            ${i === 3 || i === 7 ? "row-span-2 col-span-2" : ""} 
            ${i === 4 || i === 5 ? "row-span-2 col-span-4" : ""}
            rounded-xl  border-slate-400/10  ${i !== 2 && i !== 5 ? "p-4" : ""} 
            bg-[#0D0D0E]
           `}
          >
            {i === 0 && <Aboutme />}
            {i === 1 && (
              <div className="relative flex justify-center items-center h-full ">
                <h2 className="relative text-4xl font-bold purple_gradient">
                  Perú
                </h2>
                <img src="/peru.svg" className="absolute right-12 top-6" />
              </div>
            )}
            {i === 2 && (
              <img
                src="/china.png"
                className="object-cover h-full w-full rounded-xl"
              />
            )}
            {i === 3 && (
              <div className="flex flex-col justify-center items-center h-full gap-3">
                <h2 className="text-xl purple_gradient font-bold">
                  Desarrollador web
                </h2>
                <h2 className="text-xl purple_gradient font-bold">UX/UI</h2>
                <h2 className="text-xl purple_gradient font-bold">Frontend</h2>
              </div>
            )}
            {i === 4 && <Tec />}
            {i === 5 && (
              <img
                src="/sudio.gif"
                className="object-cover h-full w-full rounded-xl"
              />
            )}
            {i === 6 && <LargeDate />}
            {i === 7 && <Twitter />}
            {i === 8 && <Hour />}
          </div>
        ))}
      </div>
    </div>
  );
}
