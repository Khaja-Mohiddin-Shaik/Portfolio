import React from 'react'
function ProjectCard({ props }) {
    return (
        <div className='bg-[#4c46462b] w-[98%] p-3 rounded-md lg:p-5 flex flex-col gap-1 lg:gap-2'>

            {/* project title */}
            <h3 className='text-lg font-semibold lg:text-2xl'>{props.projectTitle}</h3>

            {/* project description - created a loop to iterate points in an array */}
            {props.description.map((point, index) => (
                <p key={index} className='text-xs lg:text-lg font-light'>{point}</p>
            ))}

            {/* buttons */}
            <div className="buttons pl-4 mt-2">
                {/* Code button */}
                <a
                    href={props.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#003CAC] to-[#118DAF] text-white text-xs lg:text-lg font-light rounded-lg border border-l-[#13BDEB] border-r-[#118DAF] mr-4 lg:mr-16 lg:p-2   hover:scale-105 transition-transform duration-200 w-10 p-1 text-center"
                >
                    Code
                </a>

                {/* Live button */}
                <a
                    href={props.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#003CAC] to-[#118DAF] text-white text-xs lg:text-lg font-light rounded-lg border border-l-[#13BDEB] border-r-[#118DAF]  lg:mr-16 lg:p-2  hover:scale-105 transition-transform duration-200 w-10 p-1 mr-4 text-center"
                >
                   <span className="text-[6px] lg:text-xs -translate-y-0.5 lg:-translate-y-1 inline-block">🔴</span>
                    <span>Live</span>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard