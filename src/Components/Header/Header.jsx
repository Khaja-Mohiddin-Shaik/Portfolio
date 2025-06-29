import React from 'react';
import Navigation from './Navigation';
import Logo from './Logo';
function Header() {
  return (
    <div className="header flex w-full justify-end items-center sticky top-0 z-50 font-[Inter] text-white bg-[#0D0D0D] h-[4vh] lg:h-[12vh] px-4">
      {/* Only show Navigation (hamburger) on mobile */}
      <Logo />
      <Navigation />
    </div>
  );
}

export default Header;
