import React from "react";
import "./TextDivider.css";

export const TextDivider = ({ children, className, linecolor }) => {
  if (!linecolor) linecolor = "#20A564";
  return (
    <div
      className={`${className} text-divider`}
      style={{ "--linecolor": linecolor }}
    >
      {children}
    </div>
  );
};
