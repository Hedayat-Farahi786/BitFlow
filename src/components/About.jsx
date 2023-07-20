import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutImg from "../assets/about.png";

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
            <h2 className="text-primary text-3xl font-bold mb-8">About Us</h2>
            <p className="text-gray-700 mb-6 text-sm">
              InnoVerse is a Munich-based software development company that has
              been at the forefront of innovation since its establishment in
              2021. With a team of highly skilled and dedicated professionals,
              we specialize in creating cutting-edge solutions that cater to the
              diverse needs of businesses.
            </p>
            <p className="text-gray-700 mb-6 text-sm">
              As a customer-centric company, we prioritize open and transparent
              communication throughout the development process. Our team works
              collaboratively with clients to understand their unique
              requirements and deliver tailor-made solutions that address their
              challenges effectively.
            </p>
            <p className="text-gray-700 mb-6 text-sm">
              At InnoVerse, we are committed to excellence, and our goal is to
              exceed expectations with every project we undertake. With our
              expertise in the latest technologies and a deep understanding of
              industry trends, we are your trusted partner in achieving digital
              success. Let's unlock the full potential of technology together
              with InnoVerse.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
