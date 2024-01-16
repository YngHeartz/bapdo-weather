import React, { useState } from "react";
import Arrow from "../../assets/right-arrow.png";

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
                        src={Arrow} 
                        alt="Hamburger Menu" 
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} 
                    /> 
                    
                </button>
                {isOpen && (
                    <ul className="absolute top-full left-0 text-black p-3 text-3xl">
                        <li className="mb-5 hover:text-blue-300 hover:ml-6">
                            <a href="#">What is Bapdo?</a>
                        </li>
                        <li className="mb-5 hover:text-blue-300 hover:ml-6">
                            <a href="#">Contact</a>
                        </li>
                        <li className="mb-5 hover:text-blue-300 hover:ml-6">
                            <a href="#">How to use</a>
                        </li>
                    </ul>
                )}
            </div>
        </>
    );
};

export default Navbar;
