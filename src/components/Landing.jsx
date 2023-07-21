import React from "react";
import { motion } from "framer-motion";

import landingImage from "../assets/landing.png";
import { Button } from "flowbite-react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

export const Landing = () => {
  const fadeInAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideInLeftAnimation = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  };
  const slideInRightAnimation = {
    hidden: { x: "200%" },
    visible: { x: 0 },
  };

  const language = useSelector((state) => state.language.language);
  const languageData = useSelector((state) => state.language.data[language]);

  return (
    <section id="home" className="pt-30">
      <Navbar />
       <div className="min-h-screen flex items-start justify-center w-11/12 mx-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left side with text and CTA */}
        <motion.div
          className="md:w-1/2 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={fadeInAnimation}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
        >
          <motion.h1
            variants={slideInLeftAnimation}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            {languageData.landingTransforming} <span className="text-primary">{languageData.landingVisions}</span> {languageData.landingInto}{" "}
            <span className="text-primary">{languageData.landingReality}</span>.
          </motion.h1>

          <motion.p
            variants={slideInLeftAnimation}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="text-gray-600 mb-6 text-sm md:text-base"
          >
            {languageData.landingText}
          </motion.p>
          <motion.div
            variants={slideInLeftAnimation}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
          >
            <a href="#getInTouch">
              <Button>{languageData.getStarted}</Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right side with illustration */}
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={fadeInAnimation}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
        >
          <motion.img
            src={landingImage}
            alt="Illustration"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </div>
    </section>
  );
};
