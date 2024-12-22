import React from "react";
import blends from "../../../assets/svg/blends.svg";
import linkedin from "../../../assets/svg/LinkedIn.svg";
import instagram from "../../../assets/svg/instagram.svg";
import arrowTl from "../../../assets/svg/arrow-tl.svg";
import { Button } from "../../ui/Button/Button";
import { HashLink } from "react-router-hash-link";

export const Footer = () => {
  return (
    <div>
      <hr className="block h-1 border-t-[1px] w-full border-brand" />
      <div className="flex flex-col lg:flex-row pt-[5rem] pb-[3rem] px-[2rem] lg:px-[5rem]">
        {/* Left Section - Logo & Description */}
        <div className="flex flex-col gap-[1.5rem] mb-[3rem] lg:mb-0 lg:w-1/3">
          <div className="flex gap-[1.375rem]">
            <img src={blends} className="h-[5rem] lg:h-[6.25rem]" />
          </div>
          <div className="text-white font-poppins text-[1rem] lg:text-[1.25rem] font-light">
            Transforming Ideas into Impactful Brands.
            <br />
            Your partner in creative design and digital marketing solutions.
          </div>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="flex flex-col text-white font-akira text-[1.25rem]  gap-[2rem] lg:gap-[3rem] uppercase mb-[3rem] lg:mb-0 lg:w-1/3">
          <HashLink smooth to="/work">
          <div className="ml-[2rem] md:ml-[5rem] lg:ml-[10rem] xl:ml-[12rem]">Work</div>
          </HashLink>
          <HashLink smooth to="/#whatweoffer">
          <div className="ml-[2rem] md:ml-[5rem] lg:ml-[10rem] xl:ml-[12rem]">Services</div>
          </HashLink>
          <HashLink smooth to="/#aboutus">
          <div className="ml-[2rem] md:ml-[5rem] lg:ml-[10rem] xl:ml-[12rem]">About</div>
          </HashLink>
          <HashLink smooth to="/#contactus">
          <div className="ml-[2rem] md:ml-[5rem] lg:ml-[10rem] xl:ml-[12rem]">Contact</div>
          </HashLink>
        </div>

        {/* Right Section - Contact Info and Social Links */}
        <div className="flex flex-col gap-[1.25rem] lg:w-1/3">
          {/* Social Links */}
          <div className="flex gap-[2rem] justify-center lg:justify-start">
            <a
              href="https://in.linkedin.com/company/blends-agency"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} className="h-[2.5rem]" />
            </a>
            <a
              href="https://www.instagram.com/blends.agency/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} className="h-[2.5rem]" />
            </a>
          </div>
          {/* Contact Info */}
          <div className="text-white font-poppins text-[1rem] lg:text-[1.25rem] font-light mt-[2rem] flex flex-col lg:flex-row gap-[1.5rem] justify-center lg:justify-start items-start">
            <div className="flex flex-col">
              <div>Email:</div>
              <div>Phone:</div>
            </div>
            <div className="flex flex-col">
              <div>connect@blends.agency / </div>
              <div>blendsagency@gmail.com</div>
              <div>+91 86258 91532</div>
            </div>
          </div>
          {/* Get in Touch Button */}
          <HashLink smooth to="/#contactus">
            <Button className="rounded-[2.5rem] px-2 py-[0] mt-[2rem]">
              <div className="flex gap-1 items-center">
                <span className="text-[1.5rem] text-white font-akira uppercase tracking-wide">
                  Get in touch
                </span>
                <img src={arrowTl} />
              </div>
            </Button>
          </HashLink>
        </div>
      </div>

      <hr className="block h-1 border-t-[1px] w-full border-brand" />

      <div className="flex items-center justify-center py-[2.625rem] text-white opacity-[0.8] font-poppins">
        © Copyright 2024 Blends Inc.
      </div>

      <hr className="block h-1 border-t-[1px] w-full border-brand" />
    </div>
  );
};
