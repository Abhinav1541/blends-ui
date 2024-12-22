import React from "react";
import { StaggerText } from "../ui/StaggerText/StaggerText";
import { BlendsRotatingIcon } from "../ui/BlendsRotatingIcon/BlendsRotatingIcon";

export const Mission = () => {
  return (
    <div className="relative flex bg-mission bg-cover bg-no-repeat h-screen md:h-[70rem] xl:h-[85rem] justify-center md:justify-end">
      <div className="text-black mt-80 xl:mt-72 px-6 md:px-12">
        <StaggerText
          className="text-4xl md:text-6xl xl:text-8xl font-akira text-black gap-6 md:gap-8 xl:gap-[3rem] items-end md:pr-[2rem] xl:pr-[3.25rem]"
          text={["you", "imagine", "we", "will", "craft"]}
          fontColor="text-black"
          animationType="animated-slideinleft"
        />
      </div>
      Rotating Icon Section
      <div className="absolute hidden md:block bottom-12 md:top-[50%] xl:top-[35rem] left-1/2 md:left-[15rem] xl:left-[30rem] transform -translate-x-1/2 md:translate-x-0">
        <BlendsRotatingIcon className="text-white font-akira w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] xl:w-[10rem] xl:h-[10rem]" />
      </div>
    </div>
  );
};