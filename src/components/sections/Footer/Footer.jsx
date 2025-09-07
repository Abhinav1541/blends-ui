import React from 'react';
import blends from '../../../assets/svg/blends.svg';
import linkedin from '../../../assets/svg/LinkedIn.svg';
import instagram from '../../../assets/svg/instagram.svg';
import arrowTl from '../../../assets/svg/arrow-tl.svg';
import { Button } from '../../ui/Button/Button';
import { HashLink } from 'react-router-hash-link';

export const Footer = () => {
  return (
    <div>
      <hr className="block h-1 border-t-[1px] w-full border-brand" />
      <div className="flex flex-col lg:flex-row w-full justify-between py-10 px-8 lg:px-40">
        <div className="flex flex-col gap-[1.5rem] mb-[3rem] lg:mb-0 lg:w-1/3">
          <div className="w-full flex items-center justify-center lg:justify-start">
            <img alt="blends-logo" src={blends} className="h-20" />
          </div>
          <div className="text-white font-poppins text-base lg:text-lg text-center lg:text-left font-light">
            Transforming Ideas into Impactful Brands.
            <br />
            Your partner in creative design and digital marketing solutions.
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 text-center text-white font-akira text-lg gap-4 uppercase mb-10 lg:mb-5">
          <HashLink smooth to="/work">
            <p>Work</p>
          </HashLink>
          <HashLink smooth to="/#whatweoffer">
            <p>Services</p>
          </HashLink>
          <HashLink smooth to="/#aboutus">
            <p>About</p>
          </HashLink>
          <HashLink smooth to="/#contactus">
            <p>Contact</p>
          </HashLink>
        </div>
        <div className="flex flex-col justify-center text-center text-white font-akira text-lg items-center lg:items-start gap-5 lg:w-1/3">
          <HashLink smooth to="/blogs">
            <p>BLOGS</p>
          </HashLink>
          <div className="flex gap-[2rem] justify-center lg:justify-start mb-4">
            <a
              href="https://in.linkedin.com/company/blends-agency"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="social-logo" src={linkedin} className="h-8 w-8 hover:opacity-70" />
            </a>
            <a
              href="https://www.instagram.com/blends.agency/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="social-logo" src={instagram} className="h-8 w-8 mt-1 hover:opacity-70" />
            </a>
          </div>
          <div className="flex flex-col font-poppins text-white gap-2">
            <div className="flex flex-row">
              <p className="mr-2">Email:</p>
              <div className='flex flex-col items-start'>
                <p>
                  <a href="mailto:connect@blends.agency">connect@blends.agency</a>
                </p>
                <p>
                  <a href="mailto:blendsagency@gmail.com">blendsagency@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <p className="mr-2">Phone:</p>
              <p>+91 86258 91532</p>
            </div>
          </div>
          <HashLink smooth to="/#contactus">
            <Button className="rounded-full px-2 !py-1 mt-4">
              <div className="flex gap-1 items-center py-0">
                <span className="text-sm lg:text-lg text-white font-akira uppercase tracking-wide">
                  Get in touch
                </span>
                <img className="w-10 h-10 lg:w-14 lg:h-14" alt="arrow" src={arrowTl} />
              </div>
            </Button>
          </HashLink>
        </div>
      </div>

      <hr className="block h-1 border-t-[1px] w-full border-brand" />

      <div className="flex items-center justify-center py-[2.625rem] text-white opacity-[0.8] font-poppins">
        © Copyright 2024 Blends Inc.
      </div>

      <hr className="block h-1 border-t-[1px] w-full border-brand" />
    </div>
  );
};