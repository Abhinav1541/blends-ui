import React from "react";
import { FadingGrid } from "../ui/FadingGrid/FadingGrid";
import { BlendsRotatingIcon } from "../ui/BlendsRotatingIcon/BlendsRotatingIcon";
import { StaggerText } from "../ui/StaggerText/StaggerText";
import { Button } from "../ui/Button/Button";
import DotGrid2 from "../../assets/svg/DotGrid2.svg";
import arrowTl from "../../assets/svg/arrow-tl.svg";
import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "../../utils/Utils";

export const ConsultUs = () => {
  return (
    <div className="relative py-[10rem] overflow-hidden">
      <FadingGrid img={DotGrid2} />
      <div className="absolute top-0 left-0 backdrop-blur-[1.25rem] z-1 h-auto w-auto"></div>
      <div className="flex">
        <div className="flex flex-col justify-end w-1/2">
          <BlendsRotatingIcon className="text-white font-akira w-[0rem] h-[0rem] lg:w-[10rem] lg:h-[10rem] ml-[10rem]" />
        </div>
        <div className="flex w-1/2 justify-end">
          <StaggerText
            className="text-4xl lg:text-8xl sm:text-6xl font-akira text-white gap-[1rem] items-end pr-[3.25rem]"
            text={["take your", "next step", "with us"]}
            fontColor="text-white"
            animationType="animated-slideindown"
          />
        </div>
      </div>
      <HashLink
        smooth
        to="/#contactus"
        scroll={(el) => scrollWithOffset(el, 150)}
      >
        <Button className="m-auto mt-[4rem] relative z-2">
          <div className="flex gap-1 items-center px-4">
            <span className="text-[1.75rem] text-white font-poppins">
              Contact With Us
            </span>
            <img src={arrowTl} />
          </div>
        </Button>
      </HashLink>
    </div>
  );
};