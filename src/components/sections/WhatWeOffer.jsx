import React from "react";
import { TextDivider } from "../ui/TextDivider/TextDivider";
import { OfferCard } from "../ui/OfferCard/OfferCard";

export const WhatWeOffer = () => {
  return (
    <div
      className="mt-8 md:mt-[4rem] mb-16 md:mb-[8.5rem] px-4 md:px-0"
      id="whatweoffer"
    >
      {/* Added padding for smaller screens */}
      <TextDivider>
        <div className="text-white font-akira font-semibold text-3xl sm:text-4xl md:text-6xl lg:text-7xl uppercase text-center md:text-left">
          {/* Responsive text size and alignment */}
          "Igniting Brands that
        </div>
      </TextDivider>
      <TextDivider>
        <div className="text-white font-akira font-semibold text-3xl sm:text-4xl md:text-6xl lg:text-7xl uppercase flex justify-center md:justify-start">
          {/* Responsive text size and alignment */}
          Drive
          <div className="text-brand">&nbsp;Change"</div>
        </div>
      </TextDivider>
      <div className="text-[#B8B8B8] font-akira text-2xl md:text-[3rem] font-light underline mt-8 md:mt-[5rem] ml-0 md:ml-[2rem] text-center md:text-left">
        {/* Responsive text size and alignment */}
        What we offer:
      </div>
      <div className="w-full mt-8 md:mt-[5rem]">
        <div className="flex flex-col font-poppins gap-8 md:gap-[5rem]">
          {/* Adjusted gap */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-[7.5rem] justify-center items-center md:items-start">
            {/* Made flex direction responsive and added item alignment */}
            <OfferCard
              number="01"
              title="Branding"
              description="Create a distinctive and memorable brand identity that aligns with your vision. Our expert design services ensure your brand stands out in a competitive market."
            />
            <OfferCard
              number="02"
              title="Graphic Design Services"
              description="Design visually stunning graphics that elevate your brand’s narrative. Our graphic design services focus on creating compelling visuals for your marketing materials."
            />
            <OfferCard
              number="03"
              title="Digital Marketing Solutions"
              description="Drive growth and engagement with innovative digital marketing strategies. We specialize in delivering SEO-driven campaigns that enhance your online presence."
            />
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-[7.5rem] justify-center items-center md:items-start">
            {/* Made flex direction responsive and added item alignment */}
            <OfferCard
              number="04"
              title="Social Media Content"
              description="Amplify your brand’s reach with impactful social media marketing strategies. We create tailored campaigns that increase engagement and drive traffic to your business."
            />
            <OfferCard
              number="05"
              title="UI/UX Design"
              description="Improve customer satisfaction with intuitive user experience design. We focus on creating seamless, user-centric digital experiences that enhance engagement and conversion rates."
            />
            <OfferCard
              number="06"
              title="Content Creation"
              description="Craft high-quality, engaging content that resonates with your target audience and drives brand awareness. Our expert content creation services focus on developing SEO-optimized blogs, articles, social media posts, and multimedia content tailored to your brand’s voice and objectives."
            />
          </div>
        </div>
      </div>
    </div>
  );
};