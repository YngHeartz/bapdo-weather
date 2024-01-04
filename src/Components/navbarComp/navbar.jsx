import React, { useState } from "react";
import Hamburger from "../../assets/Hamburger_icon.svg.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="relative">
                <button 
                    className="size-11"
                    onClick={toggleDropdown}
                >
                    <img 
                        src={Hamburger} 
                        alt="Hamburger Menu" 
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} 
                    /> {/* Use the Hamburger icon image */}
                </button>
                {isOpen && (
                    <ul className="absolute top-full left-0 text-white bg-black p-2">
                        <li className="mb-2">
                            <a href="#">What is Bapdo?</a>
                        </li>
                        <li className="mb-2">
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">How to use</a>
                        </li>
                    </ul>
                )}
            </div>
        </>
    );
};

export default Navbar;
