"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { Logo } from "./Icons";
import LanguageButton from "./language/LanguageButton";
import Links from "./Links/Links";

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const tl = gsap.timeline({ paused: true });
    tl.to(navbar, { y: -navbar.offsetHeight, duration: 0.2 });

    let prevScrollPos = window.scrollY;
    let isScrollingDown = false;
    let isScrollingUp = false;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      isScrollingUp = currentScrollPos < prevScrollPos;
      if (isScrollingUp) {
        tl.reverse();
      } else {
        isScrollingDown = currentScrollPos > prevScrollPos;
        if (isScrollingDown && !tl.isActive()) {
          tl.play();
        }
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const listItem = document.querySelectorAll("#landing-header li");
    const menuBackDrop = document.querySelector("#menu-backdrop");

    listItem.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const { left, top, width, height } = item.getBoundingClientRect();

        menuBackDrop.style.setProperty("--left", `${left}px`);
        menuBackDrop.style.setProperty("--top", `${top}px`);
        menuBackDrop.style.setProperty("--width", `${width}px`);
        menuBackDrop.style.setProperty("--height", `${height}px`);

        menuBackDrop.style.opacity = "1";
        menuBackDrop.style.visibility = "visible";
      });

      item.addEventListener("mouseleave", () => {
        menuBackDrop.style.opacity = "0";
        menuBackDrop.style.visibility = "hidden";
      });
    });
  }, []);

  return (
    <header
      ref={navbarRef}
      id="landing-header"
      className={`${
        !isAtTop && "lg:bg-gray-500/10"
      } py-4 text-sm px-10 flex items-center sticky top-0 w-full justify-between z-40 text-white backdrop-blur-sm `}
    >
      <div className="flex flex-grow basis-0">
        <Link href="#">
          <span class="sr-only">lilnait.dev Logo</span>
          <Logo />
        </Link>
      </div>
      <Links />
      <nav className="flex flex-grow justify-end basis-0">
        <LanguageButton />
      </nav>
      <div
        id="menu-backdrop"
        className={`
      absolute bg-purple-800 backdrop-blur-lg rounded
      translate-x-[var(--left)] translate-y-[var(--top)]
      left-0 top-0
      w-[var(--width)] h-[var(--height)]
      transition-all duration-500
      ease-in-out opacity-0 -z-10
    `}
      />
    </header>
  );
};

export default Navbar;
