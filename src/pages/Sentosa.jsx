import React from "react";
import { TextDivider } from "../components/ui/TextDivider/TextDivider";
import sentosa from "../assets/images/sentosa.png";
import { Button } from "../components/ui/Button/Button";
import { LetsConnect } from "../components/ui/LetsConnect/LetsConnect";

export const Sentosa = () => {
  return (
    <div className="pt-[5rem] px-[5rem]">
      <TextDivider>
        <div className="text-white font-poppins font-semibold text-6xl">
          Sentosa
        </div>
      </TextDivider>
      <div className="flex mt-[5rem] justify-between">
        <img src={sentosa} className="w-[46.25rem] h-[40.625rem] rounded-md" />
        <div className="bg-[rgb(32,165,100,0.7)] flex flex-col items-center justify-center py-[2.5rem] px-[5rem] text-poppins text-white rounded-md gap-[1rem]">
          <div className="text-[2rem] font-semibold">Client</div>
          <div className="text-[1.25rem] ">Sentosa</div>
          <hr className="block h-1 border-t-[1px] w-[20rem] border-white my-[0.75rem]" />
          <div className="text-[2rem] font-semibold">Project Type</div>
          <div className="text-[1.25rem] ">Development</div>
          <hr className="block h-1 border-t-[1px] w-[20rem] border-white my-[0.75rem]" />
          <Button className="py-1 rounded-[3rem] px-10 bg-white hover:border-white mt-[2rem]">
            <div className="flex gap-1 items-center px-10">
              <span className="text-[1rem] text-black font-poppins uppercase">
                Launch Project
              </span>
            </div>
          </Button>
        </div>
      </div>
      <div className="flex flex-col border-[1px] border-brand my-[5rem] rounded-md font-poppins text-white">
        <div className="px-[5rem] pt-[2rem] h-[16rem]">
          <div className="font-semibold text-[2rem]">Client Overview</div>
          <div className="font-light text-[1.25rem] mt-[1rem] text-[#CDCDCD]">
            Lorem ipsum dolor sit amet consectetur. Turpis enim eget morbi est
            eget sit posuere. Nisl volutpat in nunc gravida semper. Sed enim sed
            odio risus consequat consequat eget. Sit curabitur gravida faucibus
            ullamcorper curabitur est porta in arcu. Scelerisque amet molestie
            nunc sed.
          </div>
        </div>
        <div className="border-t-[1px] border-brand px-[5rem] pt-[2rem] h-[16rem]">
          <div className="font-semibold text-[2rem]">Challenges</div>
          <div className="font-light text-[1.25rem] mt-[1rem] text-[#CDCDCD]">
            <ul className="list-disc list-inside">
              <li>
                Lorem ipsum dolor sit amet consectetur. Turpis enim eget morbi
                est eget sit posuere.
              </li>
              <li>
                Sit curabitur gravida faucibus ullamcorper curabitur est porta
                in arcu.
              </li>
              <li>
                Quam mattis arcu facilisis gravida malesuada ultrices eros amet
                integer.
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-[1px] border-brand px-[5rem] pt-[2rem] h-[16rem]">
          <div className="font-semibold text-[2rem]">Solution By Blends</div>
          <div className="font-light text-[1.25rem] mt-[1rem] text-[#CDCDCD]">
            <ul className="list-disc list-inside">
              <li>
                Lorem ipsum dolor sit amet consectetur. Turpis enim eget morbi
                est eget sit posuere.
              </li>
              <li>
                Sit curabitur gravida faucibus ullamcorper curabitur est porta
                in arcu.
              </li>
              <li>
                Quam mattis arcu facilisis gravida malesuada ultrices eros amet
                integer.
              </li>
              <li>
                Maecenas vitae fames senectus vulputate mauris nam dignissim et
                in.
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-[1px] border-brand px-[5rem] pt-[2rem] h-[16rem]">
          <div className="font-semibold text-[2rem]">Results</div>
          <div className="font-light text-[1.25rem] mt-[1rem] text-[#CDCDCD]">
            Lorem ipsum dolor sit amet consectetur. Turpis enim eget morbi est
            eget sit posuere. Nisl volutpat in nunc gravida semper. Sed enim sed
            odio risus consequat consequat eget. Sit curabitur gravida faucibus
            ullamcorper curabitur est porta in arcu. Scelerisque amet molestie
            nunc sed.
          </div>
        </div>
        <div className="border-t-[1px] border-brand px-[5rem] pt-[2rem] h-[16rem]">
          <div className="font-semibold text-[2rem]">Conclusion</div>
          <div className="font-light text-[1.25rem] mt-[1rem] text-[#CDCDCD]">
            Lorem ipsum dolor sit amet consectetur. Turpis enim eget morbi est
            eget sit posuere. Nisl volutpat in nunc gravida semper. Sed enim sed
            odio risus consequat consequat eget. Sit curabitur gravida faucibus
            ullamcorper curabitur est porta in arcu. Scelerisque amet molestie
            nunc sed.
          </div>
        </div>
        <div className="border-t-[1px] border-brand px-[5rem] pt-[2rem] h-[16rem]">
          <div className="font-semibold text-[2rem]">Client Testimonial</div>
          <div className="font-light text-[1.25rem] mt-[1rem] text-[#CDCDCD]">
            Lorem ipsum dolor sit amet consectetur. Turpis enim eget morbi est
            eget sit posuere. Nisl volutpat in nunc gravida semper. Sed enim sed
            odio risus consequat consequat eget. Sit curabitur gravida faucibus
            ullamcorper curabitur est porta in arcu. Scelerisque amet molestie
            nunc sed.
          </div>
        </div>
      </div>
      <LetsConnect className="w-full" />
      <div className="mt-[5rem]"></div>
    </div>
  );
};
