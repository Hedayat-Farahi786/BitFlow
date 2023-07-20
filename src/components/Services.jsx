import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

const servicesData = [
  {
    title: "webDev",
    description: "webDevText",
    icon: "fas fa-globe",
  },
  {
    title: "mobileAppDev",
    description: "mobileAppDevText",
    icon: "fas fa-mobile-alt",
  },
  {
    title: "design",
    description: "designText",
    icon: "fas fa-paint-brush",
  },
  {
    title: "customSoftwareDev",
    description: "customSoftwareDevText",
    icon: "fas fa-cube",
  },
  {
    title: "backendDev",
    description: "backendDevText",
    icon: "fas fa-server",
  },
  {
    title: "qualityAssurance",
    description: "qualityAssuranceText",
    icon: "fas fa-check-double",
  },
];
const ServiceCard = ({ title, description, icon }) => {
  
  const language = useSelector((state) => state.language.language);
  const languageData = useSelector((state) => state.language.data[language]);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md flex space-x-5"
    >
      <div className="text-2xl md:text-4xl mb-4 text-center text-primary">
        <i className={`icon ${icon}`}></i>
      </div>
      <div>
        <h3 className="text-base md:text-xl font-bold mb-2">{languageData[title]}</h3>
        <p className="text-gray-700 text-xs md:text-sm">{languageData[description]}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
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
    <section
      id="services"
      className="md:py-10 mt-5 mb-28 md:mb-20 w-11/12 mx-auto"
      ref={ref} // Attach the ref to the top-level element of Services
    >
      <div className="container mx-auto px-4">
        <h2 className="text-primary text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">
          {languageData.ourServices}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Add a small delay for each item
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
