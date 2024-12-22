import React from "react";
import "./BlendsRotatingIcon.css";
import blends3 from "../../../assets/svg/blends3.svg";

export const BlendsRotatingIcon = ({ className }) => {
  return (
    <div id="blends-rotating" className={className}>
      <div className="relative z-1 pl-1">
        <img src={blends3} />
      </div>
    </div>
  );
};
