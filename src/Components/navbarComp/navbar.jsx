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

      <div className="fixed top-2 ml-2">
        <button className="size-11" onClick={toggleDropdown}>
          <img
            src={Arrow}
            alt="Arrow Menu"
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </button>
        {isOpen && (
          <ul className="absolute top-full left-0 text-black p-3 text-3xl">
            <ScrollLink to="Home" smooth={true} duration={1200}>
              <li className="mb-5 hover:text-blue-300 hover:ml-4 transition-all duration-500">
                <a href="Home" className="nav-link">
                  Home
                </a>
              </li>
            </ScrollLink>
            <ScrollLink to="About" smooth={true} duration={1200}>
              <li className="mb-5 hover:text-blue-300 hover:ml-4 transition-all duration-500">
                <a href="About" className="nav-link">
                  About
                </a>
              </li>
            </ScrollLink>
            <ScrollLink to="Contact" smooth={true} duration={1500}>
              <li className="mb-5 hover:text-blue-300 hover:ml-4 transition-all duration-500">
                <a href="Contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ScrollLink>
            <ScrollLink to="HowtoUse" smooth={true} duration={1700}>
              <li className="mb-5 hover:text-blue-300 hover:ml-4 transition-all duration-700 text-nowrap">
                <a href="HowtoUse" className="nav-link">
                  How to Use
                </a>
              </li>
            </ScrollLink>
            
            <div className="size-14 mb-5 hover:cursor-pointer hover:text-yellow-200 hover:bg-yellow-200 hover:rounded-lg transition-all duration-500 text-nowrap">
              <img src="src/assets/dark-mode.svg" alt="Dark Mode toggle Button" />
              Dark or Light
            </div>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
