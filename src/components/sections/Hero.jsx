import React from "react";
import { HeroGreenBall } from "../ui/HeroGreenBall/HeroGreenBall";
import { ScrollText } from "../ui/ScrollText/ScrollText";

export const Hero = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 relative">
      {/* Circular Background */}
      <div className="w-[200%]  sm:w-[120%] lg:w-[172rem] h-[30rem] sm:h-[36rem] lg:h-[36.1rem] rounded-[50%] border-brand border-solid border-[17px] -translate-x-[50%] shadow-[0_0_80px_0_rgba(7,101,56,1)] relative z-[1]"></div>

      {/* Hero Green Ball */}
      <div className="hidden md:block">
        <HeroGreenBall />
      </div>

      {/* Backdrop Blur */}
      <div className="backdrop-blur-[10px] absolute top-0 left-0 w-full h-full z-[2]"></div>

      {/* Hero Text */}
      <div className="text-white font-akira text-3xl w-full sm:text-4xl md:text-5xl lg:text-6xl text-center z-10 absolute top-[30%] uppercase">
        The Design and Marketing Agency You NEED
      </div>

      {/* Scroll Text Background */}
      <div className="z-10 absolute top-[55%] py-10 sm:py-12 md:py-16 bg-black-blur w-full">
        <ScrollText />
      </div>
    </div>
  );
};