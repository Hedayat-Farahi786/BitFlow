import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import contactImg from '../assets/contact.png';
import { Label, TextInput, Button, Checkbox, Textarea } from 'flowbite-react';

const GetInTouch = () => {
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
        <section id="#about" className="w-11/12 mx-auto md:py-20 mb-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row md:space-x-20 items-center">

                    <motion.div
                        className="md:w-1/2 flex flex-col mt-28 md:mt-0"
                        ref={ref}
                        initial="hidden"
                        animate={isVisible ? 'visible' : 'hidden'}
                        variants={imageVariants}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">Get In  Touch & Start Your Project Today!</h2>
                        <form className="flex flex-col gap-5 w-full">
                            <div className="flex flex-col md:flex-row space-x-0 md:space-x-3 space-y-4 md:space-y-0 w-full">
                                <div className='w-full'>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="company"
                                            value="Company"
                                        />
                                    </div>
                                    <TextInput
                                        id="company"
                                        placeholder="BitFlow..."
                                        required
                                        shadow
                                        type="text"
                                        name='company'
                                        className='w-full'
                                    />
                                </div>
                                <div className='w-full'>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="name"
                                            value="Your Name"
                                        />
                                    </div>
                                    <TextInput
                                        id="name"
                                        placeholder='John Doe...'
                                        required
                                        shadow
                                        type="text"
                                        name='name'
                                        className='w-full'
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row space-x-0 md:space-x-3 space-y-4 md:space-y-0 w-full">
                                <div className='w-full'>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="phone"
                                            value="Phone Number"
                                        />
                                    </div>
                                    <TextInput
                                        id="phone"
                                        placeholder="012345678..."
                                        required
                                        shadow
                                        type="text"
                                        name='phone'
                                        className='w-full'
                                    />
                                </div>
                                <div className='w-full'>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="email"
                                            value="Email"
                                        />
                                    </div>
                                    <TextInput
                                        id="email"
                                        placeholder='John@doe.com...'
                                        required
                                        shadow
                                        type="email"
                                        name='email'
                                        className='w-full'
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="projectDetails"
                                        value="Project Details"
                                    />
                                </div>
                                <Textarea
                                    id="projectDetails"
                                    placeholder="Details about the project you need..."
                                    required
                                    shadow
                                    name="projectDetails"
                                    rows={6}
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="agree" />
                                <Label
                                    className="flex"
                                    htmlFor="agree"
                                >
                                    <p className='text-xs md:text-sm'>
                                        By sending this form I confirm that I have read and accept the
                                    <span
                                        className="hover:underline text-primary ml-1"
                                    >
                                            Privacy Policy
                                    </span>
                                        </p>
                                </Label>
                            </div>
                            <Button type="submit" className="place-self-start uppercase px-6">
                                Get Consultation
                            </Button>
                        </form>
                    </motion.div>
                    <motion.div
                        className="md:w-1/2"
                        ref={ref}
                        initial="hidden"
                        animate={isVisible ? 'visible' : 'hidden'}
                        variants={textVariants}
                    >
                        <img src={contactImg} alt="Get in touch" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;
