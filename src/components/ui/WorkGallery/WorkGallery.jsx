import React from "react";

export const WorkGallery = ({ images, type }) => {
  if (type === "single") {
    return (
      <div className="flex flex-col gap-[1rem]">
        {images.map((image, index) => (
          <img key={index} src={image} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-2 gap-[1rem]">
        {images.map((image, index) => (
          <img key={index} src={image} />
        ))}
      </div>
    );
  }
};
