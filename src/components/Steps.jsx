import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaFileAlt, FaCheck, FaRocket } from "react-icons/fa";
import { useSelector } from "react-redux";

const StartProjectSteps = () => {

    const language = useSelector((state) => state.language.language);
    const languageData = useSelector((state) => state.language.data[language]);
  

  const steps = [
    {
      description: "contactUs",
      icon: <FaUser className="text-3xl text-primary" />,
    },
    {
      description: "requirements",
      icon: <FaFileAlt className="text-3xl text-primary" />,
    },
    {
      description: "approval",
      icon: <FaCheck className="text-3xl text-primary" />,
    },
    {
      description: "projectLaunch",
      icon: <FaRocket className="text-3xl text-primary" />,
    },
  ];

  return (
    <section id="steps" className="bg-gray-100 py-20 mb-20">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-10 text-primary">
          {languageData.howTo}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {steps.map((step, index) => (
              <a key={step.index} href="#getInTouch">
                <motion.div
                  className="flex items-center p-6 bg-white rounded-lg shadow-md"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.icon}
                  </motion.div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {languageData.step} {index + 1}
                    </h3>
                    <p className="text-gray-600">{languageData[step.description]}</p>
                  </div>
                </motion.div>
              </a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default StartProjectSteps;
