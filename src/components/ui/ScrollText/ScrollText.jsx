import React from 'react';
import StarLogo from '../../../assets/svg/star.svg';
import DotLogo from '../../../assets/svg/dot.svg';
import Marquee from 'react-fast-marquee';

export const ScrollText = () => {
  return (
    <Marquee autoFill={true}>
      <div className="py-5 lg:py-20 font-akira text-white lg:text-4xl flex items-center justify-center gap-2">
        <img alt="scroll-text" className="h-2 w-2 lg:h-4 lg:w-4 ml-2" src={StarLogo} />
        <p>Innovate</p>
        <img alt="scroll-text" className="h-2 w-2 lg:h-4 lg:w-4" src={DotLogo} />
        <p>Engage</p>
        <img alt="scroll-text" className="h-2 w-2 lg:h-4 lg:w-4" src={DotLogo} />
        <p>Grow</p>
      </div>
    </Marquee>
  );
};
