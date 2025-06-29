import React from 'react'
import AboutMe from './About-sections/AboutMe'
import TechStack from './About-sections/TechStack'
import EducationAndExperience from './EducationAndExperience'
function About() {
  return (
    <div id='About' className='lg:scroll-mt-[12vh] scroll-mt-[4vh] bg-[#0D0D0D] text-white w-screen p-2 flex flex-col items-center font-[Inter] gap-2 lg:gap-5 lg:p-4 '>
            <AboutMe />
            <TechStack />
            <EducationAndExperience />
        </div>
  )
}

export default About