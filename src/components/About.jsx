import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutImg from "../assets/about.png";
import { useSelector } from "react-redux";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this threshold value as needed
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };


  const language = useSelector((state) => state.language.language);
  const languageData = useSelector((state) => state.language.data[language]);

  return (
    <section id="about" className="w-11/12 mx-auto md:py-20 pt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:space-x-20 items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <img src={aboutImg} alt="About Us" />
          </motion.div>
          <motion.div
            className="md:w-1/2"
            ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
          >
            <h2 className="text-primary text-3xl font-bold mb-8">{languageData.about}</h2>
            <p className="text-gray-700 mb-6 text-sm">
              {languageData.aboutUsText1}
            </p>
            <p className="text-gray-700 mb-6 text-sm">
              {languageData.aboutUsText2}
            </p>
            <p className="text-gray-700 mb-6 text-sm">
              {languageData.aboutUsText3}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
