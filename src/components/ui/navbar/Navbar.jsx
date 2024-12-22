import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BlendsIcon } from '../BlendsIcon/BlendsIcon';
import { Button } from '../Button/Button';
import { NavHashLink } from 'react-router-hash-link';
import { scrollWithOffset } from '../../../utils/Utils';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="hidden lg:flex fixed top-0 left-0 right-0 backdrop-blur-sm h-[100px] items-center z-50">
        <ul className="flex items-center w-full justify-center gap-[8rem]">
          <li>
            <NavHashLink
              className="text-white font-akira"
              smooth
              to="/#aboutus"
              scroll={(el) => scrollWithOffset(el, 150)}
            >
              ABOUT US
            </NavHashLink>
          </li>
          <li>
            <NavLink to="/work" className="text-white font-akira">
              OUR WORK
            </NavLink>
          </li>
          <li>
            <Link to="/">
              <BlendsIcon />
            </Link>
          </li>
          <li>
            <NavHashLink
              className="text-white font-akira"
              smooth
              to="/#whatweoffer"
              scroll={(el) => scrollWithOffset(el, 100)}
            >
              OUR SERVICES
            </NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to="/#contactus" scroll={(el) => scrollWithOffset(el, 200)}>
              <Button>
                <span className="text-white font-akira">CONTACT US</span>
              </Button>
            </NavHashLink>
          </li>
        </ul>
      </nav>
      <nav className="flex lg:hidden fixed w-full top-0 left-0 right-0 backdrop-blur-sm items-center justify-center z-50 py-10">
        <Link to="/">
          <BlendsIcon />
        </Link>
        <button type="button" className="absolute right-4 focus:outline-none" onClick={toggleMenu}>
          <GiHamburgerMenu className="text-white" size={40} />
        </button>
        <div className={`absolute top-0 w-full bg-black flex lg:hidden flex-col space-y-4 items-center py-4 transition-opacity duration-500 ease-in-out ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } md:static md:flex md:flex-row md:space-y-0 md:space-x-6 md:opacity-100 md:visible`}>
          <ul className="flex flex-col items-center justify-center w-full h-96 gap-y-8">
            <button
              type="button"
              className="absolute right-4 top-12 focus:outline-none"
              onClick={toggleMenu}
            >
              <MdClose className="text-white" size={40} />
            </button>
            <li>
              <Link to="/">
                <BlendsIcon />
              </Link>
            </li>
            <li>
              <NavHashLink
                className=" text-white font-akira text-lg"
                smooth
                to="/#aboutus"
                scroll={(el) => scrollWithOffset(el, 150)}
              >
                ABOUT US
              </NavHashLink>
            </li>
            <li>
              <NavLink to="/work" className="text-white font-akira text-lg">
                OUR WORK
              </NavLink>
            </li>
            <li>
              <NavHashLink
                className="text-white font-akira text-lg"
                smooth
                to="/#whatweoffer"
                scroll={(el) => scrollWithOffset(el, 100)}
              >
                OUR SERVICES
              </NavHashLink>
            </li>
            <li className="">
              <NavHashLink smooth to="/#contactus" scroll={(el) => scrollWithOffset(el, 200)}>
                <Button>
                  <span className="text-white font-akira text-lg">CONTACT US</span>
                </Button>
              </NavHashLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
