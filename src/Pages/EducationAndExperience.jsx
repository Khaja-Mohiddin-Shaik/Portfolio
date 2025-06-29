import React from 'react'
import EducationAndExperienceCard from './Education-and-experience-sections/EducationAndExperienceCard'
function EducationAndExperience() {
  return (
    <div className='EducationAndExperience bg-[#0D0D0D] text-white w-screen p-2  font-[Inter] flex flex-col gap-2 lg:flex-row lg:w-full' >

        {/* Education*/}
        <div className="Education bg-[#4c46462b] w-[98%]   rounded-md flex flex-col items-center gap-1 p-4 lg:gap-3">
            <h3 className='text-[#FDEE53] text-lg text-center font-bold lg:text-2xl'>Education</h3>
            <EducationAndExperienceCard props={{name : "NRI Institute of Technology", duration : "2021-2025", role : "Bachelor’s Degree in Computer Science Engineering(AI & ML)"}}/>
            <EducationAndExperienceCard props={{name : "Sarada Educational Institution", duration : "2019-2021", role : "Intermediate"}}/>
            <EducationAndExperienceCard props={{name : "St. Ann’s School", duration : "2019", role : "Schooling"}}/>
        </div>

        {/* Experience */}
        <div className="Experience bg-[#4c46462b] w-[98%] rounded-md flex flex-col items-center gap-1 p-4 lg:gap-3">
            <h3 className='text-[#FDEE53] text-lg text-center font-bold lg:text-2xl'>Experience</h3>
            <EducationAndExperienceCard props={{name : "HMI Engineering Services", duration : "Feb. 2023 – Jun. 2023", role : "Student Intern as Full Stack Developer"}}/>
            <EducationAndExperienceCard props={{name : "ExcelR", duration : " May 2024 – July 2024", role : " Student Intern as MERN Stack Developer"}}/>
            </div>
    </div>
  )
}

export default EducationAndExperience