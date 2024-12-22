import React from 'react';
import { HashLink } from 'react-router-hash-link';
import connect from '../../../assets/svg/connect.svg';
import blackarrowTl from '../../../assets/svg/black-arrow-tl.svg';
import { Button } from '../Button/Button';

export const LetsConnect = ({ className }) => {
  return (
    <div
      className={`${className} w-full lg:w-[82.5rem] h-[16rem] sm:h-[20rem] lg:h-[24rem] m-auto flex flex-col items-center justify-center relative gap-6 sm:gap-8 lg:gap-[4rem] px-4`}
    >
      {/* Background Image */}
      <img
        src={connect}
        className="w-full h-full absolute top-0 left-0 z-0 object-cover"
        alt="Connect Background"
      />

      {/* Title */}
      <div className="text-white relative z-10 uppercase font-akira text-3xl sm:text-4xl lg:text-5xl text-center">
        Let's <br /> Connect
      </div>

      {/* Button */}
      <HashLink to="/#contactus">
        <Button className="py-2 sm:py-3 lg:py-4 hover:cursor-pointer rounded-full px-4 sm:px-6 lg:px-8 relative z-10 bg-white hover:border-white">
          <div className="flex gap-2 items-center px-2">
            <span className="text-base sm:text-lg lg:text-xl text-black font-poppins uppercase tracking-wide">
              Get in touch
            </span>
            <img src={blackarrowTl} alt="Arrow" />
          </div>
        </Button>
      </HashLink>
    </div>
  );
};
