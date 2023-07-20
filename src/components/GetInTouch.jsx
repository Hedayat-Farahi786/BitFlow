import React, { useEffect, useState } from "react";
import "./GetInTouch.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import contactImg from "../assets/contact.png";
import {
  Label,
  TextInput,
  Button,
  Checkbox,
  Textarea,
  Modal,
} from "flowbite-react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useSelector } from "react-redux";

const GetInTouch = () => {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState("");
  const props = { openModal, setOpenModal };

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);

    // Format the form data as you like for the email body
    const emailData = {
      company: data.company,
      name: data.name,
      phone: data.phone,
      email: data.email,
      projectDetails: data.projectDetails,
      //   agree: data.agree ? 'Agreed' : 'Not Agreed', // Assuming agree is a checkbox
    };

    // Send the email using EmailJS
    emailjs
      .send(
        "service_6f4gggs",
        "template_iouoqvg",
        emailData,
        "Wz0e517C1GC6puU6-"
      )
      .then((response) => {
        props.setOpenModal("pop-up-suc");
        setLoading(false);

        reset(); // Reset the form after successful submission
      })
      .catch((error) => {
        props.setOpenModal("pop-up-err");
        setLoading(false);
      });
  };

  const language = useSelector((state) => state.language.language);
  const languageData = useSelector((state) => state.language.data[language]);

  return (
    <section id="getInTouch" className="w-11/12 mx-auto md:py-20 mb-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row md:space-x-20 items-center">
          <motion.div
            className="md:w-1/2 flex flex-col mt-28 md:mt-0"
            ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <h2 className="text-center md:text-left text-3xl md:text-3xl font-bold mb-8">
              {languageData.getInTouchGetIn}{" "}
              <span className="text-primary">
                {languageData.getInTouchTouch}
              </span>{" "}
              {languageData.getInTouchStartProject}{" "}
              <span className="text-primary">
                {languageData.getInTouchToday}
              </span>
              !
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5 w-full"
            >
              <div className="flex flex-col md:flex-row space-x-0 md:space-x-3 space-y-4 md:space-y-0 w-full">
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="company" value={languageData.company} />
                  </div>
                  <TextInput
                    id="company"
                    {...register("company", { required: true })}
                    placeholder="InnoVerse..."
                    shadow
                    type="text"
                    name="company"
                    color={errors.company ? "failure" : ""}
                    helperText={
                      errors.company && (
                        <span>
                          {languageData.company} {languageData.isRequired}
                        </span>
                      )
                    }
                    className="w-full"
                  />
                </div>
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="name" value={languageData.name} />
                  </div>
                  <TextInput
                    id="name"
                    {...register("name", { required: true })}
                    placeholder="John Doe..."
                    shadow
                    type="text"
                    color={errors.name ? "failure" : ""}
                    helperText={
                      errors.name && (
                        <span>
                          {languageData.name} {languageData.isRequired}
                        </span>
                      )
                    }
                    name="name"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-x-0 md:space-x-3 space-y-4 md:space-y-0 w-full">
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="phone" value={languageData.phone} />
                  </div>
                  <TextInput
                    id="phone"
                    {...register("phone", { required: true })}
                    placeholder="012345678..."
                    shadow
                    type="tel"
                    color={errors.phone ? "failure" : ""}
                    helperText={
                      errors.phone && (
                        <span>
                          {languageData.phone} {languageData.isRequired}
                        </span>
                      )
                    }
                    name="phone"
                    className="w-full"
                  />
                </div>
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="email" value={languageData.email} />
                  </div>
                  <TextInput
                    id="email"
                    {...register("email", { required: true })}
                    placeholder="John@doe.com..."
                    shadow
                    type="email"
                    color={errors.email ? "failure" : ""}
                    helperText={
                      errors.email && (
                        <span>
                          {languageData.email} {languageData.isRequired}
                        </span>
                      )
                    }
                    name="email"
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="projectDetails"
                    value={languageData.projectDetails}
                  />
                </div>
                <Textarea
                  id="projectDetails"
                  {...register("projectDetails", { required: true })}
                  placeholder="Details about the project you need..."
                  shadow
                  color={errors.projectDetails ? "failure" : ""}
                  helperText={
                    errors.projectDetails && (
                      <span>
                        {languageData.projectDetails} {languageData.isRequired}
                      </span>
                    )
                  }
                  name="projectDetails"
                  rows={6}
                />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  {...register("agree", { required: true })}
                  id="agree"
                  color={errors.agree ? "failure" : ""}
                />
                <Label className="flex" htmlFor="agree">
                  <p className="text-xs md:text-sm">
                    {languageData.agreementText}
                    <a
                      href="src/assets/privacy_policy.pdf"
                      target="_blank"
                      className="hover:underline text-primary ml-1 cursor-pointer"
                    >
                      {languageData.privacyPolicy}
                    </a>
                  </p>
                </Label>
              </div>
              {errors.agree && (
                <span className="text-sm text-red-600">
                  {languageData.agreement} {languageData.isRequired}
                </span>
              )}
              <Button
                type="submit"
                disabled={loading}
                className="place-self-auto md:place-self-start uppercase px-6 mt-5 disabled:opacity-60"
              >
                {loading && (
                  <AiOutlineLoading3Quarters className="mr-3 h-4 w-4 animate-spin" />
                )}
                <p>{languageData.getConsultation}</p>
              </Button>
            </form>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
          >
            <img src={contactImg} alt="Get in touch" />
          </motion.div>
        </div>
      </div>
      <Modal
        show={props.openModal === "pop-up-suc"}
        size="md"
        popup
        onClick={() => {
          props.setOpenModal(undefined);
          window.location = "#home";
        }}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <BsCheck2Circle className="mx-auto mb-4 h-14 w-14 text-primary" />
            <h3 className="mb-5 text-2xl font-bold">{languageData.thankYou}</h3>
            <h3 className="mb-10 text-base font-normal text-gray-600 dark:text-gray-400">
              {languageData.successMessage}
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                className="px-6"
                onClick={() => {
                  props.setOpenModal(undefined);
                  window.location = "#home";
                }}
              >
                {languageData.close}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={props.openModal === "pop-up-err"}
        size="md"
        popup
        onClick={() => props.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <BiErrorCircle className="mx-auto mb-4 h-14 w-14 text-red-600" />
            <h3 className="mb-5 text-2xl font-bold">{languageData.oops}</h3>
            <h3 className="mb-10 text-base font-normal text-gray-600 dark:text-gray-400">
              {languageData.errorMessage}
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                className="px-6"
                onClick={() => props.setOpenModal(undefined)}
              >
                {languageData.close}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default GetInTouch;
