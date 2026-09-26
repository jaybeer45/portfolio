import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>


      {/* Navbar */}
      <nav
        className={`w-full fixed top-0 px-5 lg:px-8 xl:px-[8%] flex justify-between py-5 items-center z-50 border-b transition-all duration-300 
          ${isScroll
            ? isDarkMode
              ? "bg-dark-theme border-white/30 shadow-white/20 shadow-sm"
              : "bg-white/80 backdrop-blur-lg border-gray-400 shadow-sm"
            : isDarkMode
              ? "bg-transparent border-transparent"
              : "bg-transparent border-transparent"
          }`}
      >
        {/* Logo */}
        {/* Logo */}
        <Link href="#top" className="mr-15">
          <span className="text-2xl md:text-3xl font-bold tracking-wide cursor-pointer text-gray-900 dark:text-white">
            JAY<span className="text-accent">BEER</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 font-Ovo">
          <li>
            <Link href="#top">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li><Link href="#experience">Experience</Link></li>
          <li>
            <Link href="#work">My Work</Link>
          </li>
          <li>
            <Link href="#contact">Contact Me</Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6 cursor-pointer"
            />
          </button>

          {/* Contact Button */}
          <a

            href="#contact"

            className="hidden lg:flex gap-3 items-center px-10 py-2.5 border-2 border-gray-400 rounded-full font-Ovo hover:border-accent hover:text-accent transition-colors"
          >

            Contact

            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt=""
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden ml-3"
            onClick={openMenu}
            aria-label="Open menu"
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* Mobile Side Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-dark-hover dark:text-white transition-transform duration-500 transform translate-x-full"
        >
          <div
            onClick={closeMenu}
            className="absolute right-6 top-6 cursor-pointer"
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close menu"
              className="w-6 cursor-pointer"
            />
          </div>

          <li>
            <Link href="#top" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li>
            <Link href="#about" onClick={closeMenu}>
              About
            </Link>
          </li>

          <li>
            <Link href="#services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="#experience" onClick={closeMenu}>
              Experience
            </Link>
          </li>

          <li>
            <Link href="#work" onClick={closeMenu}>
              My Work
            </Link>
          </li>

          <li>
            <Link href="#contact" onClick={closeMenu}>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;