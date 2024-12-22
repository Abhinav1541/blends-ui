import React from "react";

export const WorkVideos = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem]">
      {videos.map((element, index) => (
        <div
          key={index}
          className="iframe-wrapper relative w-full pb-[177.77%]"
        >
          <iframe
            src={element}
            allow="autoplay"
            className="absolute top-0 left-0 w-full h-full"
            title={`Video ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};
