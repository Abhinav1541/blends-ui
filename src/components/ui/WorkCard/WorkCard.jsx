import React from "react";
import { Button } from "../Button/Button";
import rightarrows from "../../../assets/svg/rightarrows.svg";
import { Link } from "react-router-dom";

export const WorkCard = ({ img, title, description, link }) => {
  return (
    <div className="flex flex-col items-center relative group w-full max-w-md mx-auto">
      {/* Image Section */}
      <div className="w-full">
        <img
          src={img}
          className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover"
          alt={title}
        />
      </div>

      {/* Title */}
      <div className="font-poppins text-white text-lg sm:text-xl font-semibold mt-4 text-center">
        {title}
      </div>

      {/* Description */}
      <div className="font-poppins text-gray-400 text-sm sm:text-base md:text-lg font-light mt-2 group-hover:text-brand transition-all duration-500 ease-in-out text-center">
        {description}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[10%] sm:w-[15%] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out h-[1px] bg-brand"></div>
      </div>

      {/* Overlay with Button */}
      <div className="absolute opacity-0 bg-[rgba(0,0,0,0.5)] group-hover:opacity-100 transition-all duration-500 ease-in-out w-full h-56 sm:h-72 md:h-80 lg:h-96 top-0 left-0 flex items-center justify-center">
        {!link ? (
          <Button className="px-4 sm:px-6 bg-[rgba(0,0,0,0.8)]">
            <div className="flex gap-2 sm:gap-4">
              <span className="text-sm sm:text-base md:text-xl text-white font-poppins">
                Explore
              </span>
              <img src={rightarrows} alt="arrow" />
            </div>
          </Button>
        ) : (
          <Link to={link}>
            <Button className="px-4 sm:px-6 bg-[rgba(0,0,0,0.8)]">
              <div className="flex gap-2 sm:gap-4">
                <span className="text-sm sm:text-base md:text-xl text-white font-poppins">
                  Explore
                </span>
                <img src={rightarrows} alt="arrow" />
              </div>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
