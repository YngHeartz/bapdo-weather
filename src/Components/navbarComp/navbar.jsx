import React, { useState } from "react";
import Arrow from "../../assets/right-arrow.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollLink to="About" smooth={true} duration={1200}>
        <a href="About" className="nav-link">
        </a>
      </ScrollLink>

      <ScrollLink to="Contact" smooth={true} duration={1200}>
        <a href="Contact" className="nav-link">
        </a>
      </ScrollLink>

      <ScrollLink to="HowtoUse" smooth={true} duration={1200}>
        <a href="HowtoUse" className="nav-link">
        </a>
      </ScrollLink>

      <div className="relative">
        <button className="size-11" onClick={toggleDropdown}>
          <img
            src={Arrow}
            alt="Hamburger Menu"
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </button>
        {isOpen && (
          <ul className="absolute top-full left-0 text-black p-3 text-3xl">
            <ScrollLink to="About" smooth={true} duration={500}>
              <li className="mb-5 hover:text-blue-300 hover:ml-6">
                <a href="About" className="nav-link">
                  About
                </a>
              </li>
            </ScrollLink>
            <ScrollLink to="Contact" smooth={true} duration={500}>
              <li className="mb-5 hover:text-blue-300 hover:ml-6">
                <a href="Contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ScrollLink>
            <ScrollLink to="HowtoUse" smooth={true} duration={500}>
              <li className="mb-5 hover:text-blue-300 hover:ml-6">
                <a href="HowtoUse" className="nav-link">
                  How to Use
                </a>
              </li>
            </ScrollLink>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
