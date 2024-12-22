import React from "react";
import { Button } from "../ui/Button/Button";
import DotGrid from "../../assets/svg/DotGrid.svg";
import arrowDown from "../../assets/svg/arrowDown.svg";
import upwardParabola from "../../assets/svg/upwardParabola.svg";
import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "../../utils/Utils";

export const AboutUs = () => {
  return (
    <div className="pt-[10rem] md:pt-[17.5rem] relative" id="aboutus">
      <img
        src={upwardParabola}
        className="w-full md:w-[114rem] absolute top-5"
        alt="Upward Parabola"
      />
      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <HashLink
          smooth
          to="/#aboutus"
          scroll={(el) => scrollWithOffset(el, 150)}
        >
          <Button className="bg-black px-[1.25rem]">
            <span className="text-white font-poppins text-[1.25rem]">
              Lets Get Started
            </span>
          </Button>
        </HashLink>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 pt-[2rem] px-4 md:px-0">
          <div className="uppercase font-akira text-4xl sm:text-5xl md:text-6xl lg:text-8xl flex flex-col gap-5 p-4 sm:p-6 md:p-8 bg-green-blur rounded-2xl w-fit mx-auto md:ml-16">
            <div className="text-white text-center">About</div>
            <div className="text-brand text-center">Blends</div>
          </div>
          <div className="mt-8 md:mt-32 md:ml-[16rem] w-full md:w-fit items-center">
            <div className="bg-[rgba(45,44,44,0.4)] text-white font-light text-center rounded-xl py-4 px-6 md:px-[1.6875rem] md:py-[1.125rem] w-full md:w-auto">
              <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-20">
                <div className="flex flex-col gap-2 items-center">
                  <div className="text-4xl md:text-5xl font-akira flex justify-center gap-1">
                    <div className="animate-slidein [--delay:300ms] opacity-0">2</div>
                    <div className="animate-slidein [--delay:700ms] opacity-0">5</div>
                    <div className="animate-slidein [--delay:1000ms] opacity-0">+</div>
                  </div>
                  <div className="text-base font-poppins">Projects Delivered</div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <div className="text-4xl md:text-5xl font-akira flex justify-center gap-1">
                    <div className="animate-slidein [--delay:300ms] opacity-0">1</div>
                    <div className="animate-slidein [--delay:700ms] opacity-0">5</div>
                    <div className="animate-slidein [--delay:1000ms] opacity-0">+</div>
                  </div>
                  <div className="text-base font-poppins">Total Client's</div>
                </div>
              </div>
            </div>
            <HashLink
              smooth
              to="/#contactus"
              scroll={(el) => scrollWithOffset(el, 200)}
            >
              <Button className="m-auto mt-8 md:mt-[5rem]">
                <div className="flex gap-2 items-center">
                  <span className="text-xl text-white font-akira">
                    Contact Us
                  </span>
                  <img src={arrowDown} alt="Arrow Down" />
                </div>
              </Button>
            </HashLink>
          </div>
        </div>
        <div className="md:w-1/2 px-4 md:px-0 mt-8 md:mt-0 relative"> {/* Relative positioning on the parent */}
          <img
            src={DotGrid}
            className="absolute z-1 left-0 md:left-[15rem] w-1/2 md:w-auto"
            alt="Dot Grid"
          />
          <div className="z-2 backdrop-blur-[0.5rem] w-full md:w-[80%] bg-[rgba(45,44,44,0.4)] rounded-xl text-white font-poppins text-base flex flex-col px-[1rem] py-[1rem] gap-6 top-0 md:top-[4rem] left-0 md:left-[2rem]  max-h-[70vh] relative"> {/* Relative positioning and overflow handling */}
            <div>
              Welcome to Blends Agency, the leading design agency in Pune and a
              top-rated marketing agency in India, offering comprehensive
              design and marketing solutions for businesses of all sizes.
              Recognized as a creative agency in Pune and a hub for innovative
              digital marketing strategies, we specialize in brand identity
              design, strategic marketing solutions, social media marketing, and
              web design and development.
            </div>
            <div>
              As the best design firm in Maharashtra, we blend creativity and
              technology to deliver exceptional digital marketing solutions that
              drive growth. From corporate identity design to startup branding
              consultancy, our team provides end-to-end services tailored to your
              needs, including graphic design services, e-commerce marketing
              solutions, and user experience design services.
            </div>
            <div>
              With a strong focus on Pune digital marketing services and
              branding consultancy, we serve industries ranging from tech
              startups to small businesses, offering expertise in B2B marketing,
              visual branding, and integrated marketing communication.
            </div>
            <div>
              At Blends Agency, we help you transform your vision into reality.
              Partner with the top design and marketing agency in Pune for
              innovative, results-driven solutions!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};