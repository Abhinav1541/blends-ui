import React from "react";
import "./FadingGrid.css";

export const FadingGrid = ({ img }) => {
  return (
    <img
      src={img}
      className="absolute top-0 left-0 w-full fade-animation z-0"
    />
  );
};
