import React from 'react'
import Profile from "../../assets/images/About-page-icons/Profile.png"
function AboutMe() {
  return (
    <div className="About-me bg-[#4c46462b] w-[98%]  rounded-md lg:p-3">
            <h3 className='flex items-center text-lg font-bold gap-0.5 lg:gap-1 text-[#FDEE53] lg:text-2xl'><img src={Profile} alt="Profile" className='w-4 h-4 lg:w-7 lg:h-6'/>About me</h3>
            <p className='text-xs lg:text-lg'>Hi, I&#39;m Khaja Mohiddin Shaik, a passionate Web Developer with a strong foundation in building modern, responsive, and user-friendly websites and web applications. I specialize in both frontend and backend technologies, and I enjoy turning ideas into real-world solutions through clean and efficient code.</p>
        </div>
  )
}

export default AboutMe