import React from 'react'

function EducationAndExperienceCard({props}) {
  return (
    <div className='bg-[#4c46462b] w-[90%] p-3 rounded-md lg:p-5'>
        <h4 className='text-xs lg:text-lg font-semibold'>{props.name}</h4>
        <p className=' text-xs lg:text-lg  text-[#FDEE53] font-light'>{props.duration}</p>
        <p className=' text-xs lg:text-lg'>{props.role}</p>
    </div>
  )
}

export default EducationAndExperienceCard