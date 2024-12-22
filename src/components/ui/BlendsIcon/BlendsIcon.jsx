import React from "react";
import BlendsLogo from "../../../assets/svg/blends.svg";
import BlendsLogo2 from "../../../assets/svg/blends2.svg";

export const BlendsIcon = () => {
  return (
    <div className="relative group">
      <img
        src={BlendsLogo}
        className="transition-opacity duration-[800ms] ease-in-out group-hover:opacity-0"
      />
      <img
        src={BlendsLogo2}
        className="absolute w-[100%] h-[100%] top-0 left-0 transition-opacity duration-[800ms] ease-in-out opacity-0 group-hover:opacity-100"
      />
    </div>
  );
};
