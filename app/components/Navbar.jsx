import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state

  // Open side menu
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  // Close side menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Make sure the code runs only on the client-side (prevent hydration issues)
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScroll(true);
        } else {
          setIsScroll(false);
        }
      };

      // Add scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Cleanup on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []); // Empty dependency array to run once on mount

  return (
    <>
      {/* Background image */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="Background" className="w-full" />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo : assets.logo_dark}
            alt="Logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
          <li>
            <a className="font-Ovo" href="#top">Home</a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">About me</a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">Services</a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">My Work</a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">Contact me</a>
          </li>
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Moon icon" className="w-6" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Arrow icon" className="w-3" />
          </a>

          {/* Mobile Menu Button */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Menu icon" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white ${isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}
        >
          {/* Close Button */}
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close icon" className="w-5 cursor-pointer" />
          </div>

          {/* Mobile Menu Links */}
          <li>
            <a className="font-Ovo" href="#top" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a className="font-Ovo" href="#about" onClick={closeMenu}>About me</a>
          </li>
          <li>
            <a className="font-Ovo" href="#services" onClick={closeMenu}>Services</a>
          </li>
          <li>
            <a className="font-Ovo" href="#work" onClick={closeMenu}>My Work</a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact" onClick={closeMenu}>Contact me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
