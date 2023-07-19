"use client";

import { Footer as FooterComponent } from "flowbite-react";
import logo from "../assets/logo.png";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <FooterComponent container>
      <div className="w-11/12 mx-auto text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterComponent.Brand
            alt="Brand Logo"
            href="#home"
            src={logo}
          />
          <FooterComponent.LinkGroup className="flex space-x-3 text-xs md:text-sm mt-10 md:mt-0">
            <FooterComponent.Link href="#home">Home</FooterComponent.Link>
            <FooterComponent.Link href="#services">
              Services
            </FooterComponent.Link>
            <FooterComponent.Link href="#about">About</FooterComponent.Link>
            <FooterComponent.Link href="#testimonials">
              Testimonials
            </FooterComponent.Link>
            <FooterComponent.Link href="#getInTouch">
              Contact
            </FooterComponent.Link>
          </FooterComponent.LinkGroup>
        </div>
        <FooterComponent.Divider />
        <div className="w-full flex items-center justify-between">
          <FooterComponent.Copyright
            by="BitFlow™"
            href="#"
            year={new Date().getFullYear()}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterComponent.Icon href="#" icon={BsFacebook} />
            <FooterComponent.Icon href="#" icon={BsInstagram} />
            <FooterComponent.Icon href="#" icon={BsTwitter} />
            <FooterComponent.Icon href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </FooterComponent>
  );
}
