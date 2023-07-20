// src/Portfolio.js
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

const projects = [
  {
    id: 1,
    title: "Party Torten",
    description: "partyTortenInfo",
    imageUrl: "",
    websiteUrl: "https://partytorten.vercel.app/",
  },
  {
    id: 2,
    title: "Snap Sell",
    description: "snapSellInfo",
    imageUrl: "",
    websiteUrl: "https://snap-sell.vercel.app/",
  },
  // Add more projects here as needed
];


const Project = ({ project }) => {
    const language = useSelector((state) => state.language.language);
  const languageData = useSelector((state) => state.language.data[language]);

    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="rounded-lg shadow-lg overflow-hidden pb-3"
      >
        <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-xs md:text-sm">
                  {languageData[project.description]}
                </p>
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  className="text-primary font-medium"
                >
                  {languageData.liveDemo}
                </a>
              </div>
      </motion.div>
    );
  };



  const Portfolio = () => {
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


    const language = useSelector((state) => state.language.language);
  const languageData = useSelector((state) => state.language.data[language]);

  
    return (
      <section id="portfolio" className="bg-white py-10 w-11/12 mx-auto" ref={ref}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-primary text-center font-bold mb-10">{languageData.ourPortfolio}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div key={project.id} custom={index} animate={isVisible ? 'visible' : 'hidden'}>
                <Project project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
