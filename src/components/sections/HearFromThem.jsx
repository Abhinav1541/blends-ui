import React from "react";
import { TextDivider } from "../ui/TextDivider/TextDivider";
import SimpleSlider from "../ui/Slider/SimpleSlider";

export const HearFromThem = () => {
  return (
    <div className="py-12 lg:py-[5rem]">
      <TextDivider linecolor="white">
        <div className="text-white font-akira text-1xl sm:text-4xl lg:text-6xl uppercase flex text-center">
          Hear from our <div className="text-brand">&nbsp;founders</div>
        </div>
      </TextDivider>
      <div className="px-6 sm:px-10 lg:px-[5rem] mt-6 sm:mt-8 lg:mt-[2rem]">
        <SimpleSlider />
      </div>
    </div>
  );
};
