import React from "react";

export const Button = ({ className, children }) => {
  return (
    <div
      className={`${className} py-[0.875rem] px-4 border-white border-solid rounded-[2rem] border-[0.125rem] w-fit hover:bg-brand hover:border-brand transition-all duration-500 ease-in-out`}
    >
      {children}
    </div>
  );
};
