import React from 'react';
import Photo from "../assets/images/Profile-photo/Photo.jpeg";

function Hero() {
  return (
    <div
      id="Home"
      className="h-[98vh] lg:h-[88vh] w-full flex flex-col lg:flex-row justify-center lg:justify-around items-center text-white bg-[#0D0D0D] font-[Inter] px-4 lg:px-10 lg:scroll-mt-[12vh] scroll-mt-[4vh] "
    >
      {/* Text Section */}
      <div className="details flex flex-col items-center lg:items-start text-center lg:text-left mt-6 lg:mt-0">
        <p className="text-sm lg:text-2xl mb-1.5">
          Hello, I&#39;m Khaja Mohiddin Shaik,
        </p>
        <p className="text-xl lg:text-7xl mb-1.5 font-semibold">
          Web Developer
        </p>
        <p className="text-sm lg:text-2xl mb-5">
          based in India.
        </p>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1UmD2xSN0WCcPcOiSqpJMa6VGERXeOhhH/view?id=1UmD2xSN0WCcPcOiSqpJMa6VGERXeOhhH"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#003CAC] to-[#118DAF] text-white text-xs lg:text-xl font-light px-4 py-2 rounded-lg border border-l-[#13BDEB] border-r-[#118DAF] hover:scale-105 transition-transform duration-200"
        >
          Resume
        </a>
      </div>

      {/* Image Section */}
      <div className="profile-image mt-8 lg:mt-0 w-[40vw] h-[25vh] lg:w-[14.66vw] lg:h-[32.5vh]">
        <img
          src={Photo}
          alt="Profile"
          className="rounded-[50%] w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
