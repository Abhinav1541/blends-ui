import React from "react";
import StarLogo from "../../../assets/svg/star.svg";
import DotLogo from "../../../assets/svg/dot.svg";
import Marquee from "react-fast-marquee";

export const ScrollText = () => {
  return (
    <Marquee autoFill={true}>
      <div className="py-5 lg:py-20 font-akira text-white lg:text-4xl flex gap-2">
        <img alt="scroll-text"   src={StarLogo} />
        <div>Innovate</div>
        <img alt="scroll-text"  src={DotLogo} />
        <div>Engage</div>
        <img alt="scroll-text"  src={DotLogo} />
        <div>Grow</div>
      </div>
    </Marquee>
  );
};
