import React, { useEffect, useRef, useState } from "react";
import "animate.css";

const useHover = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  return [isHovered, handleHover, handleUnhover];
};
const SkillButton = ({ text }) => {
  const [isHovered, handleHover, handleUnhover] = useHover();

  return (
    <button
      className={`skillset-button m-3 skillset bg-[#DDFE55] ${
        isHovered ? "animate__animated animate__rubberBand" : ""
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
    >
      {text}
    </button>
  );
};

const About = () => {
  const generateRandomDelay = () => Math.random();
  const [isScrolled, setIsScrolled] = useState(false);
  const aboutTitleRef = useRef(null);

  const [isHovered, handleHover, handleUnhover] = useHover();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      });
    }, options);

    if (aboutTitleRef.current) {
      observer.observe(aboutTitleRef.current);
    }

    return () => {
      if (aboutTitleRef.current) {
        observer.unobserve(aboutTitleRef.current);
      }
    };
  }, []);
  return (
    <div className="about">
      <section id="about">
        <div
          ref={aboutTitleRef}
          className={`about-title w-full flex justify-center items-center ${
            isScrolled ? "scrolled" : ""
          }`}
        >
          <div
            className="about-highlighter flex justify-center items-center"
            data-cursor-color="black"
          >
            <h3 className="title-about m-5">About</h3>
          </div>
          <h3 className={`title-me m-5 ${isScrolled ? "text-black" : ""}`}>
            Me
          </h3>
        </div>
        <div className="about-content max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="about-me flex flex-col justify-center">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 about-head-text">
              Hello there,
            </h1>
            <p className="about-para">
              I am Shahin Sha, currently on quest for a computer science
              <br />
              engineering degree. I'm not just crunching code; I'm turning
              <br />
              caffeine into code and dreams into reality.Python is my love
              <br />
              language, and I speak it fluently. Need a website that's <br />
              smoother than a double shot espresso? I've got you covered.
              <br /> Worried about security? I'm your friendly neighborhood
              <br />
              penetration tester, putting the "secure" in "code"! So, if you're
              <br />
              looking for someone who can seamlessly blend code and <br />
              creativity, sip coffee while problem-solving, and turn a <br />
              casual stroll into a globe-trotting quest, you've found your{" "}
              <br />
              coder. Let's turn ideas into reality and codes into captivating
              <br />
              journeys!
            </p>
          </div>
          <div className="flex flex-col items-center skill-set-body">
            <h1 className="skillset-title py-2">Skill Set</h1>
            <div className="skillset-container flex">
              <div className="skillset-container-1">
                <SkillButton text="Python" />
                <SkillButton text="django" />
                <SkillButton text="React" />
                <SkillButton text="Kotlin" />
              </div>
              <div className="skillset-container-1">
                <SkillButton text="Java" />
                <SkillButton text="Pentest" />
                <SkillButton text="Linux" />
                <SkillButton text="spring boot" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
