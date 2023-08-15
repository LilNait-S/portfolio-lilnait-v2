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

  // div 
  const [backdropStyles, setBackdropStyles] = useState({
    left: "0",
    top: "0",
    width: "0",
    height: "0",

    opacity: 0,
    visibility: "hidden",
  });

  const handleMouseEnter = (event) => {
    const { left, top, width, height } = event.target.getBoundingClientRect();

    setBackdropStyles({
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
      height: `${height}px`,

      opacity: 1,
      visibility: "visible",
    });
  };

  const handleMouseLeave = () => {
    setBackdropStyles({
      ...backdropStyles,
      opacity: 0,
      visibility: "hidden",
    });
  };

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
          <Logo />
        </Link>
      </div>
      <Links />
      <nav className="flex flex-grow justify-end basis-0">
        <LanguageButton />
      </nav>
      {/* <div
        className={`group absolute bg-purple-400/25  backdrop-blur-lg rounded
        w-[${backdropStyles.width}] h-[${backdropStyles.height}]  left-0 top-0
        translate-x-[${backdropStyles.left}] translate-y-[${backdropStyles.top}]
        ${backdropStyles.visibility}

        -z-10
        `}
      /> */}
    </header>
  );
};

export default Navbar;
