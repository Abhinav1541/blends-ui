import React, { useRef } from "react";
import { WorkGallery } from "../components/ui/WorkGallery/WorkGallery";
import { TextDivider } from "../components/ui/TextDivider/TextDivider";
import { Button } from "../components/ui/Button/Button";
import { LetsConnect } from "../components/ui/LetsConnect/LetsConnect";
import { WorkVideos } from "../components/ui/WorkVideos/WorkVideos";

export const Company = ({ data }) => {
  const {
    company,
    mainImage,
    projectType,
    clientOverview,
    challenges,
    solution,
    results,
    conclusion,
    gallery,
    videos,
  } = data;

  const targetRef = useRef(null);

  const handleScroll = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div>
      {/* Company Title */}
      <TextDivider className="pt-40">
        <div className="text-white font-poppins font-semibold text-3xl sm:text-4xl lg:text-6xl text-center">
          {company}
        </div>
      </TextDivider>

      <div className="pt-10 px-5 sm:px-10 lg:px-20">
        {/* Main Section */}
        <div className="flex flex-col lg:flex-row items-center justify-evenly mt-10 gap-8 ">
          <img
            src={mainImage}
            className="w-full max-w-lg lg:max-w-2xl rounded-md"
            alt={`${company} main`}
          />

          <div className="bg-[rgba(32,165,100,0.7)] flex flex-col items-center justify-center py-6 px-8 font-poppins text-white rounded-md gap-4 w-full lg:w-2/5">
            <div className="text-xl sm:text-2xl font-semibold">Client</div>
            <div className="text-lg sm:text-xl">{company}</div>
            <hr className="block h-1 border-t-[1px] w-full sm:w-[80%] border-white my-2" />
            <div className="text-xl sm:text-2xl font-semibold">Project Type</div>
            <div className="text-lg sm:text-xl">{projectType}</div>
            <hr className="block h-1 border-t-[1px] w-full sm:w-[80%] border-white my-2" />
            <Button className="py-2 rounded-full px-10 bg-white hover:border-white mt-4" onClick={handleScroll}>
              <span className="text-lg sm:text-xl text-black font-poppins font-medium">
                Learn More
              </span>
            </Button>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="flex flex-col border-[1px] border-brand my-10 rounded-md font-poppins text-white">
          <div className="px-6 sm:px-10 lg:px-20 py-6">
            <div className="font-semibold text-xl sm:text-2xl" ref={targetRef}>
              Client Overview
            </div>
            <div className="font-light text-base sm:text-lg mt-4 text-gray-300">
              {clientOverview}
            </div>
          </div>

          <div className="border-t-[1px] border-brand px-6 sm:px-10 lg:px-20 py-6">
            <div className="font-semibold text-xl sm:text-2xl">Challenges</div>
            <div className="font-light text-base sm:text-lg mt-4 text-gray-300">
              <ul className="list-disc pl-4">
                {challenges.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t-[1px] border-brand px-6 sm:px-10 lg:px-20 py-6">
            <div className="font-semibold text-xl sm:text-2xl">Solution By Blends</div>
            <div className="font-light text-base sm:text-lg mt-4 text-gray-300">
              <ul className="list-disc pl-4">
                {solution.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t-[1px] border-brand px-6 sm:px-10 lg:px-20 py-6">
            <div className="font-semibold text-xl sm:text-2xl">Results</div>
            <div className="font-light text-base sm:text-lg mt-4 text-gray-300">
              {results}
            </div>
          </div>

          <div className="border-t-[1px] border-brand px-6 sm:px-10 lg:px-20 py-6">
            <div className="font-semibold text-xl sm:text-2xl">Conclusion</div>
            <div className="font-light text-base sm:text-lg mt-4 text-gray-300">
              {conclusion}
            </div>
          </div>
        </div>

        {/* Gallery and Videos */}
        {gallery && <WorkGallery images={gallery.images} type={gallery.type} />}
        <div className="py-8"></div>
        {videos && <WorkVideos videos={videos} />}

        {/* Let's Connect Section */}
        <LetsConnect className="w-full mb-20" />
      </div>
    </div>
  );
};
