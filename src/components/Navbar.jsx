import React from "react";
import Logo from "../assets/images/logo.png";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className="text-white navbar flex justify-between"
      data-cursor-color="#9D98FE"
      data-cursor-size="25px"
    >
      <img src={Logo} alt="" srcset="" className="logo w-full" />
      <ul className="nav-item hidden md:flex">
        <li className="p-7 hover:scale-105 duration-300">
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"
            className="nav-link"
          >
            home
          </Link>
        </li>
        <li className="p-7 hover:scale-105 duration-300">
          <Link to="about" smooth={true} duration={500} className="nav-link">
            about
          </Link>
        </li>
        <li className="p-7 hover:scale-105 duration-300">
          <Link to="work" smooth={true} duration={500} className="nav-link">
            work
          </Link>
        </li>
        <li className="p-7 hover:scale-105 duration-300">
          <Link to="contact" smooth={true} duration={500} className="nav-link">
            contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden hamburger-open">
        {nav ? (
          <AiOutlineClose size={20} className="hamburger-open " />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <img src={Logo} alt="" srcset="" className="logo w-full m-4" />
        <ul className="uppercase p-4">
          <li className="p-7 border-b border-gray-600 hover:scale-105 duration-300">
            home
          </li>
          <li className="p-7 border-b border-gray-600 hover:scale-105 duration-300">
            <Link to="about" smooth={true} duration={500} className="nav-link">
              about
            </Link>
          </li>
          <li className="p-7 border-b border-gray-600 hover:scale-105 duration-300">
            <Link to="work" smooth={true} duration={500} className="nav-link">
              work
            </Link>
          </li>
          <li className="p-7 border-b border-gray-600 hover:scale-105 duration-300">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link"
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
