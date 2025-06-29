import React, { useState, useRef, useEffect } from "react";
import Github from "../../assets/images/Navigation-Icons/Github.png";
import Google from "../../assets/images/Navigation-Icons/Google.png";
import Linkedin from "../../assets/images/Navigation-Icons/Linkedin.png";
import HamburgerIcon from "../../assets/images/Navigation-Icons/HamburgerIcon.png"; 
import CloseIcon from "../../assets/images/Navigation-Icons/CloseIcon.png"; 

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // 👇 Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="navigation w-1/2 h-full flex justify-end items-center relative">
      {/* Desktop Links */}
      <div className="hidden lg:flex gap-8 items-center text-sm lg:text-xl">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
        <a href="https://github.com/Khaja-Mohiddin-Shaik/" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="Github" className="w-6 h-6 lg:w-8 lg:h-8" />
        </a>
        <a href="https://www.linkedin.com/in/khaja-mohiddin-shaik-674260269/" target="_blank" rel="noopener noreferrer">
          <img src={Linkedin} alt="Linkedin" className="w-6 h-6 lg:w-8 lg:h-8" />
        </a>
        <a href="mailto:khaja28mohiddin@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={Google} alt="Email" className="w-6 h-6 lg:w-8 lg:h-8" />
        </a>
      </div>

      {/* Hamburger Icon */}
      <div className="lg:hidden z-50">
        <button onClick={toggleMenu}>
          <img src={isOpen ? CloseIcon : HamburgerIcon} alt="Menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-[4vh] right-4 bg-black text-white flex flex-col gap-4 p-4 w-[40vw] min-h-[32vh] items-center shadow-md z-40 rounded-md"
        >
          <a href="#Home" onClick={toggleMenu}>Home</a>
          <a href="#About" onClick={toggleMenu}>About</a>
          <a href="#Projects" onClick={toggleMenu}>Projects</a>
          <a href="#Contact" onClick={toggleMenu}>Contact</a>
          <a href="https://github.com/Khaja-Mohiddin-Shaik/" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="Github" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/khaja-mohiddin-shaik-674260269/" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="Linkedin" className="w-6 h-6" />
          </a>
          <a href="mailto:khaja28mohiddin@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={Google} alt="Email" className="w-6 h-6" />
          </a>
        </div>
      )}
    </div>
  );
}

export default Navigation;
