import React from "react";
import { TiArrowDown } from "react-icons/ti";
import Heroimg from "../assets/images/heroimg.svg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import AnimatedCursor from "react-animated-cursor";

export const Hero = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["  Websites", "  Software", "  Apps"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-white">
      <AnimatedCursor color="255, 255, 255" />
      <div className="flex justify-center items-center hero-text-container">
        <h1 className="hero-text-1 m-4">MAKING</h1>
        <h3 className="hero-text-2 m-4">Secure</h3>
      </div>
      <div
        className="sub-container"
        data-cursor-color="black"
        data-cursor-size="30px"
      >
        <span
          className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 sub-title"
          ref={el}
        ></span>
      </div>
      <img src={Heroimg} alt="" className="hero-img" />
      <Link to="about" smooth={true} duration={500} className="p-7">
        <button
          className="next-button hover:scale-105 duration-300"
          data-cursor-color="black"
        >
          <TiArrowDown size={60} />
        </button>
      </Link>
    </div>
  );
};

export default Hero;
