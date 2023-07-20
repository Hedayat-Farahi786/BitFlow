"use client";

import { Dropdown, Navbar as Nav } from "flowbite-react";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../features/languageSlice";
import { motion } from "framer-motion";

import deFlag from "../assets/de.png";
import enFlag from "../assets/en.png";
import { useState, useEffect } from "react";

import { FiX, FiMenu } from "react-icons/fi";


export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const language = useSelector((state) => state.language.language);
  const languageData = useSelector((state) => state.language.data[language]);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is in view
      const sections = [
        "home",
        "services",
        "about",
        "portfolio",
        "testimonials",
        "getInTouch",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    

    // Add event listener for scrolling
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleScrollForNavbarShadow = () => {
    // Check if the user has scrolled down at least 20 pixels
    if (window.scrollY >= 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // Add a scroll event listener when the component mounts
    window.addEventListener('scroll', handleScrollForNavbarShadow);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScrollForNavbarShadow);
    };
  }, []);

 

  return (
    <Nav fluid rounded className={`py-5 mx-auto fixed w-full top-0 z-50 ${
      scrolled ? 'shadow-md' : ''
    }`}>
      <div className="w-11/12 mx-auto flex items-center justify-between">
      <Nav.Brand href="#home">
        <img alt="InnoVerse Logo" className="h-6 sm:h-8" src={logo} />
      </Nav.Brand>

      {/* <Nav.Toggle /> */}
      <div className="md:hidden">
        <button
          className="fixed z-50 right-4 top-4 rounded-md text-primary"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {isOpen && (
          <div className="fixed z-30 right-0 top-0 h-screen w-full bg-[#ffffff9a] shadow-lg flex justify-end">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="w-2/3 z-40 h-full bg-white pt-10"
            >
              <ul className="py-5">
                {/* Use the Nav.Link component for smooth scrolling in mobile menu */}
                <Nav.Link
                  activeClass="mobileActive"
                  href="#home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={toggleMenu} // Close the mobile menu after clicking on a Nav.Link
                  className={`text-base px-4 ${
                    activeSection === "home" ? "mobileActive" : ""
                  }`}
                >
                  <p>{languageData.home}</p>
                </Nav.Link>
                <Nav.Link
                  activeClass="mobileActive"
                  href="#services"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={toggleMenu}
                  className={`text-base px-4 ${
                    activeSection === "services" ? "mobileActive" : ""
                  }`}
                >
                  {languageData.services}
                </Nav.Link>
                <Nav.Link
                  activeClass="mobileActive"
                  href="#about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={toggleMenu}
                  className={`text-base px-4 ${
                    activeSection === "about" ? "mobileActive" : ""
                  }`}
                >
                  {languageData.about}
                </Nav.Link>
                <Nav.Link
                  activeClass="mobileActive"
                  href="#portfolio"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={toggleMenu}
                  className={`text-base px-4 ${
                    activeSection === "portfolio" ? "mobileActive" : ""
                  }`}
                >
                  {languageData.portfolio}
                </Nav.Link>
                <Nav.Link
                  activeClass="mobileActive"
                  href="#testimonials"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={toggleMenu}
                  className={`text-base px-4 ${
                    activeSection === "testimonials" ? "mobileActive" : ""
                  }`}
                >
                  {languageData.testimonials}
                </Nav.Link>
                <Nav.Link
                  activeClass="mobileActive"
                  href="#getInTouch"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={toggleMenu}
                  className={`text-base px-4 ${
                    activeSection === "getInTouch" ? "mobileActive" : ""
                  }`}
                >
                  {languageData.contact}
                </Nav.Link>
                <Nav.Link onClick={toggleMenu} className="text-base px-4">
                  {language === "english" ? (
                    <div
                      className="flex"
                      onClick={() => dispatch(setLanguage("deutsch"))}
                    >
                      <img className="w-6 mr-2" src={deFlag} />
                      <p>DE</p>
                    </div>
                  ) : (
                    <div
                      className="flex"
                      onClick={() => dispatch(setLanguage("english"))}
                    >
                      <img className="w-6 mr-2" src={enFlag} />
                      <p>EN</p>
                    </div>
                  )}
                </Nav.Link>
              </ul>
            </motion.div>
          </div>
        )}
      </div>
      <Nav.Collapse>
        {/* Use the Nav.Link component from react-scroll for smooth scrolling */}
        <Nav.Link
          activeClass="active"
          href="#home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`text-base ${activeSection === "home" ? "active" : ""}`}
        >
          <p>{languageData.home}</p>
        </Nav.Link>
        <Nav.Link
          activeClass="active"
          href="#services"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`text-base ${
            activeSection === "services" ? "active" : ""
          }`}
        >
          {languageData.services}
        </Nav.Link>
        <Nav.Link
          activeClass="active"
          href="#about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`text-base ${activeSection === "about" ? "active" : ""}`}
        >
          {languageData.about}
        </Nav.Link>
        <Nav.Link
          activeClass="active"
          href="#portfolio"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`text-base ${
            activeSection === "portfolio" ? "active" : ""
          }`}
        >
          {languageData.portfolio}
        </Nav.Link>
        <Nav.Link
          activeClass="active"
          href="#testimonials"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`text-base ${
            activeSection === "testimonials" ? "active" : ""
          }`}
        >
          {languageData.testimonials}
        </Nav.Link>
        <Nav.Link
          activeClass="active"
          href="#getInTouch"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`text-base ${
            activeSection === "getInTouch" ? "active" : ""
          }`}
        >
          {languageData.contact}
        </Nav.Link>
        <Nav.Link onClick={toggleMenu} className="text-base cursor-pointer">
          {language === "english" ? (
            <div
              className="flex"
              onClick={() => dispatch(setLanguage("deutsch"))}
            >
              <img className="w-6" src={deFlag} />
            </div>
          ) : (
            <div
              className="flex"
              onClick={() => dispatch(setLanguage("english"))}
            >
              <img className="w-6" src={enFlag} />
            </div>
          )}
        </Nav.Link>
      </Nav.Collapse>
      </div>
    </Nav>
  );
}
