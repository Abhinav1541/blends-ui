import React from "react";
import { ScrollText } from "../ui/ScrollText/ScrollText";
import { Button } from "../ui/Button/Button";
import projectsImg from "../../assets/images/projects.png";
import greenline from "../../assets/svg/greenline.svg";
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <div className="relative">
      {/* Title Section */}
      <div className="relative -mt-16 md:-mt-32 text-white font-akira text-4xl md:text-6xl lg:text-7xl flex flex-col items-center">
        <div>OUR</div>
        <div className="text-brand">PROJECTS</div>
      </div>

      {/* Spacer */}
      <div className="h-[4rem] md:h-[6rem] lg:h-[8rem]"></div>

      {/* Projects Image */}
      <img
        src={projectsImg}
        className="w-full h-auto object-cover"
        alt="Projects"
      />

      {/* Overlay Section */}
      <div className="z-10 relative w-full bg-grey-blur backdrop-blur-[30px] flex flex-col lg:flex-row items-center gap-8 lg:gap-0 py-6 lg:py-12 px-6">
        {/* Button Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Link to="/work">
            <Button className="bg-black px-8 py-3 md:px-12 md:py-4">
              <span className="text-white font-poppins text-lg md:text-xl lg:text-2xl">
                See all work
              </span>
            </Button>
          </Link>
        </div>

        {/* Text Section */}
        <div className="text-white font-poppins w-full lg:w-1/2 text-center lg:text-left text-sm md:text-base lg:text-lg px-4 lg:px-8">
          Blends Agency has delivered impactful results across brand identity
          design, web design, social media marketing, and strategic campaigns.
          As a top design agency in Pune, we’ve worked with startups and
          businesses to craft innovative digital marketing solutions and
          exceptional brand experiences that drive success.
        </div>
      </div>

      {/* Green Line */}
      <div className="absolute lg:static bottom-0 w-full">
        <img src={greenline} className="w-full" alt="Green Line" />
      </div>
    </div>
  );
};