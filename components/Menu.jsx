"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Menu = () => {
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

  return (
    <div>
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 bg-transparent px-6 py-6 flex w-full z-20 text-white items-center justify-between ${
          !isAtTop && "lg:backdrop-blur-sm lg:bg-[#141414/50]"
        }`}
      >
        is the nav
      </nav>
    </div>
  );
};

export default Menu;
