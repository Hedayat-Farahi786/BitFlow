import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const servicesData = [
    {
        title: 'Web Development',
        description: 'We create beautiful and responsive websites tailored to your needs.',
        icon: 'fas fa-globe',
    },
    {
        title: 'Mobile App Development',
        description: 'We build innovative mobile apps for both Android and iOS platforms.',
        icon: 'fas fa-mobile-alt',
    },
    {
        title: 'UI/UX Design',
        description: 'Our designers create intuitive and stunning user interfaces.',
        icon: 'fas fa-paint-brush',
    },
    {
        title: 'Custom Software Development',
        description: 'We build tailor-made software solutions to address your unique challenges.',
        icon: 'fas fa-cube',
    },
    {
        title: 'Backend Development',
        description: 'We architect and develop robust server-side solutions for your applications.',
        icon: 'fas fa-server',
    },
    {
        title: 'Quality Assurance',
        description: 'We perform rigorous testing to ensure your software is bug-free and reliable.',
        icon: 'fas fa-check-double',
    },
];
const ServiceCard = ({ title, description, icon }) => {

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
                <h3 className="text-base md:text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-700 text-xs md:text-sm">{description}</p>
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

    return (
        <section
            className="py-10 mb-20 w-11/12 mx-auto"
            ref={ref} // Attach the ref to the top-level element of Services
        >
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-16">Our Services</h2>
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
