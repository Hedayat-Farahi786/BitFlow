import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
    {
      id: 1,
      role: 'Chief Technology Officer',
      name: 'Sarah Johnson',
      message: "I am incredibly impressed with the software solutions provided by BitFlow. The team's technical expertise, attention to detail, and dedication to delivering top-notch products are commendable. Our organization's efficiency has skyrocketed since implementing your software. Thank you for helping us stay ahead in the digital age!",
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      business: 'TechNex Solutions GmbH' 
    },
    {
      id: 2,
      role: 'Lead Developer',
      name: 'John Anderson',
      message: "Working with BitFlow was a game-changer for our projects. The seamless integration, robust architecture, and timely support have made our development process much smoother. BitFlow's problem-solving abilities are unmatched, and we are grateful for your partnership in achieving our goals.",
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      business: 'SwiftServe Media AG' 
    },
    {
      id: 3,
      role: 'Product Manager',
      name: 'Emily Roberts',
      message: "I couldn't be happier with the software solutions BitFlow delivered. From ideation to execution, your team displayed exceptional professionalism and creativity. The user-friendly interfaces and innovative features have received great feedback from our customers. Your software has elevated our products and strengthened our market position.",
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      business: 'EcoLiving Solutions GmbH'
    },
    {
      id: 4,
      role: 'IT Director',
      name: 'Michael Smith',
      message: "BitFlow's software development company exceeded our expectations in every aspect. The robust security measures and flawless performance of your applications have instilled confidence in our IT infrastructure. Your team's dedication to meeting deadlines and providing comprehensive support sets you apart from the competition. We are extremely satisfied with the results.",
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      business: 'GlobalFood Services AG' 
    },
    {
      id: 5,
      role: 'Head of Operations',
      name: 'Jennifer Ramirez',
      message: "I highly recommend BitFlow's software development services to any company seeking cutting-edge solutions. Your team's ability to grasp our unique requirements and translate them into exceptional software products is remarkable. The collaboration was seamless, and the end results have had a significant positive impact on our business. Thank you for the outstanding work!",
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
      business: 'GreenEnerco GmbH' 
    }
  ];
  

const Testimonial = ({ testimonial }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4"
        >
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col space-y-2">
                <div className="flex space-x-2">
                    <i className="fas fa-quote-left mr-2 text-primary text-lg md:text-xl"></i>
                    <p className="text-gray-600 text-sm md:text-base mb-4">{testimonial.message}</p>
                    <i className="fas fa-quote-right mr-2 text-primary text-lg md:text-xl place-self-end"></i>

                </div>
                <div className='flex items-center space-x-2'>
                    <img className='w-10 rounded-full shadow-lg' src={testimonial.image} alt={testimonial.name} />
                    <div>
                        <p className="font-semibold text-gray-800">{testimonial.name}</p>
                        <p className="text-gray-500 text-xs">{testimonial.role} <span className="text-primary">@</span> {testimonial.business}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}


const Testimonials = () => {
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, // Change this value to adjust the autoplay speed in milliseconds
        pauseOnHover: true,
    };

    return (
        <section id='testimonials' className="mx-auto max-w-md md:max-w-5xl pt-10 mt-10 mb-32" ref={ref}>
            <h2 className="text-primary text-3xl md:text-4xl font-bold text-center mb-5 md:mb-16">Testimonials</h2>
            <Slider {...settings}>
                {testimonials.map((testimonial) => (
                    <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: testimonial.id * 0.2 }} // Add a small delay for each testimonial
                    >
                        <Testimonial testimonial={testimonial} />
                    </motion.div>
                ))}
            </Slider>
        </section>
    );
};

export default Testimonials;
