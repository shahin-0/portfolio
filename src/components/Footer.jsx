import React from "react";

export const Footer = () => {
  return (
    <div className="foot-container text-black bg-[#DDFE55]">
      <section id="contact">
        <div className="foot-main">
          <h1 className="foot-title">
            Contact <br /> Me.
          </h1>
          <div className="button-section flex justify-center items-center">
            <button className="foot-button">
              <a href="mailto:shahins.dev@gmail.com">Start your project</a>
            </button>
          </div>
        </div>
        <div className="contact-container flex justify-between">
          <div className="address-section">
            <h4 className="contact-head">Address</h4>
            <p className="address-item">
              Sbioa Unity enclave, <br /> Chennai
            </p>
          </div>
          <div className="social-section">
            <h4 className="contact-head">Socials</h4>
            <ul className="social-list">
              <li className="social-item p-1">
                <a href="https://github.com/shahin-0">Github</a>
              </li>
              <li className="social-item p-1">
                <a href="https://www.linkedin.com/in/shahin-sha-a89506225/">
                  LinkedIn
                </a>
              </li>
              <li className="social-item p-1">
                <a href="https://www.instagram.com/ig.shxhin/?hl=en">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-section">
            <h4 className="contact-head head-contact">Contact</h4>
            <ul className="contact-list">
              <li className="contact-item p-1">Shahins.dev@gmail.com</li>
              <li className="contact-item p-1">+91 7994469452</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
