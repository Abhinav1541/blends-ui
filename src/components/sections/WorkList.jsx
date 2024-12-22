import React from "react";
import upwardParabola from "../../assets/svg/upwardParabola.svg";
import arrowDown from "../../assets/svg/arrowDown.svg";
import sentosa from "../../assets/images/sentosa/sentosa.png";
import liveplay from "../../assets/images/liveplay/liveplay.png";
import daulat from "../../assets/images/daulat/daulat.png";
import bharattransit from "../../assets/images/bharattransit/bharattransit.png";
import surge from "../../assets/images/surge/surge.png";
import exogear from "../../assets/images/exogear/exogear.png";
import cute from "../../assets/images/cute/cute.png";
import matrix from "../../assets/images/matrix/matrix.png";
import aasan from "../../assets/images/aasan/aasan.png";
import tshirt from "../../assets/images/tshirt/tshirt.png";
import { Button } from "../ui/Button/Button";
import { WorkCard } from "../ui/WorkCard/WorkCard";
import { LetsConnect } from "../ui/LetsConnect/LetsConnect";
import { HashLink } from "react-router-hash-link";

export const WorkList = () => {
  return (
    <div className="py-10 relative" id="work">
  <img
    src={upwardParabola}
    className="w-[90%] sm:w-[100%] max-w-[114rem] mx-auto absolute top-5"
    alt="Decorative"
  />
  <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
    <HashLink smooth to="/work/#work">
      <Button className="relative bg-black rounded-[1.5rem] py-3 px-4">
        <div className="flex gap-2 items-center">
          <span className="text-base sm:text-lg text-white font-akira">OUR WORK</span>
          <img src={arrowDown} alt="Arrow Down" />
        </div>
      </Button>
    </HashLink>
  </div>

  <div className="flex flex-col mt-[8rem] sm:mt-[10rem] px-4 sm:px-8 lg:px-[3.75rem] pt-[12rem] pb-[6rem] gap-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <WorkCard
        img={sentosa}
        title="Sentosa Realty"
        description="Branding"
        link="/work/sentosa"
      />
      <WorkCard
        img={liveplay}
        title="Liveplay.in"
        description="Branding"
        link="/work/liveplay"
      />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <WorkCard
        img={daulat}
        title="Daulat"
        description="Branding and Content Creation"
        link="/work/daulat"
      />
      <WorkCard
        img={exogear}
        title="Exogear"
        description="Branding"
        link="/work/exogear"
      />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <WorkCard
        img={bharattransit}
        title="Bharat Transit"
        description="Branding"
        link="/work/bharattransit"
      />
      <WorkCard
        img={surge}
        title="Surge"
        description="Branding"
        link="/work/surge"
      />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <WorkCard
        img={cute}
        title="Cuteiclesandlyor"
        description="Content Creation and Social Media Management"
        link="/work/cuteiclesandlyor"
      />
      <WorkCard
        img={matrix}
        title="Matrixs Bar and Kitchen"
        description="Content Creation and Social Media Management"
        link="/work/matrix"
      />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <WorkCard
        img={aasan}
        title="Aasaan"
        description="Content Creation and Social Media Management"
        link="/work/aasaan"
      />
      <WorkCard
        img={tshirt}
        title="The T-Shirt Store"
        description="Product Design"
        link="/work/tshirt"
      />
    </div>
  </div>


      <LetsConnect />
      <div className="mt-[5rem]"></div>
    </div>
  );
}