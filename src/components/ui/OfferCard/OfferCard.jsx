import React from "react";
import "./OfferCard.css";

export const OfferCard = ({ number, title, description }) => {
  return (
    <div className="flex flex-col w-[27rem] relative groupt p-[2rem]">
      <div className="cardcontent relative">
        <div className="text-brand font-semibold text-[2rem]">{number}</div>
        <div className="text-white font-semibold text-[2rem]">{title}</div>
        <div className="text-white text-[1rem] font-light mt-[1rem] mb-[2rem]">
          {description}
        </div>
        <div className="lineh2"></div>
      </div>
      <div className="lineh"></div>
      <div className="linev"></div>
    </div>
  );
};