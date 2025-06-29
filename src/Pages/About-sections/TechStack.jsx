import React from 'react'
import LogosGeneration from './LogosGeneration'
import Grafbase from "../../assets/images/Tech-Stack-Icons/Grafbase.png"
import HTML from "../../assets/images/Tech-Stack-Icons/HTML.png"
import CSS from "../../assets/images/Tech-Stack-Icons/CSS.png"
import TailwindCSS from "../../assets/images/Tech-Stack-Icons/TailwindCSS.png"
import JavaScript from "../../assets/images/Tech-Stack-Icons/JavaScript.png"
import Nodejs from "../../assets/images/Tech-Stack-Icons/Nodejs.png"
import ReactIcon from "../../assets/images/Tech-Stack-Icons/ReactIcon.png"
import Redux from "../../assets/images/Tech-Stack-Icons/Redux.png"
import NextJS from "../../assets/images/Tech-Stack-Icons/NextJS.png"
import MongoDB from "../../assets/images/Tech-Stack-Icons/MongoDB.png"
import SQL from "../../assets/images/Tech-Stack-Icons/SQL.png"
import ExpressJS from "../../assets/images/Tech-Stack-Icons/ExpressJS.png"
import VisualStudioCode from "../../assets/images/Tech-Stack-Icons/VisualStudioCode.png"
import Github from "../../assets/images/Tech-Stack-Icons/Github.png"
import Figma from "../../assets/images/Tech-Stack-Icons/Figma.png"
function TechStack() {
    return (
        <div className='tech-stack bg-[#4c46462b] w-[98%] p-1 lg:p-3 rounded-md'>
            <h3 className='text-lg font-bold text-[#FDEE53] lg:text-2xl pl-1 flex gap-1 items-center'><img src={Grafbase} alt="Grafbase" className='w-4 h-4 lg:w-6 lg:h-6'/>Tech Stack</h3>
            {/* Front-end */}
            <div className="front-end ">
                <h4 className='text-center font-bold mb-3 mt-3 lg:mb-4 lg:mt-5 lg:text-xl'>Front-end</h4>
                <div className="logos flex gap-6 lg:gap-20 justify-center">

                    <LogosGeneration props={{ img: HTML, imgName: "HTML", className: "w-6 h-7 lg:w-12 lg:h-12" }} />
                    <LogosGeneration props={{ img: CSS, imgName: "CSS", className: "w-6 h-7 lg:w-12 lg:h-12" }} />
                    <LogosGeneration props={{ img: TailwindCSS, imgName: "TailwindCSS", className: "w-10 h-7 lg:w-12 lg:h-11" }} />
                    <LogosGeneration props={{ img: JavaScript, imgName: "JavaScript", className: "w-6 h-7 lg:w-10 lg:h-11" }} />

                </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="Frameworks-Libraries ">
                <h4 className='text-center font-bold mb-3 mt-3 lg:mb-4 lg:mt-5 lg:text-xl'>Frameworks & Libraries</h4>
                <div className="logos flex gap-7 lg:gap-22 justify-center">

                    <LogosGeneration props={{ img: Nodejs, imgName: "NodeJS", className: "w-6 h-7 lg:w-12 lg:h-11" }} />
                    <LogosGeneration props={{ img: ReactIcon, imgName: "React", className: "w-6 h-7 lg:w-11 lg:h-12" }} />
                    <LogosGeneration props={{ img: Redux, imgName: "Redux", className: "w-10 h-7 lg:w-11 lg:h-11" }} />
                    <LogosGeneration props={{ img: NextJS, imgName: "NextJS", className: "w-6 h-7 lg:w-11 lg:h-11" }} />

                </div>
            </div>


            {/* Database */}
            <div className="Database">
                <h4 className='text-center font-bold mb-3 mt-3 lg:mb-4 lg:mt-5 lg:text-xl'>Database</h4>
                <div className="logos flex gap-7 lg:gap-12 justify-center">

                    <LogosGeneration props={{ img: MongoDB, imgName: "MongoDB", className: "w-6 h-7 lg:w-10 lg:h-12" }} />
                    <LogosGeneration props={{ img: SQL, imgName: "SQL", className: "w-10 h-7 lg:w-14 lg:h-12" }} />

                </div>
            </div>

            {/* Back-end */}
            <div className="back-end">
                <h4 className='text-center font-bold mb-3 mt-3 lg:mb-4 lg:mt-5 lg:text-xl'>Back-end</h4>
                <div className="logos flex gap-7 lg:gap-12 justify-center">

                    <LogosGeneration props={{ img: ExpressJS, imgName: "ExpressJS", className: "w-6 h-7 lg:w-10 lg:h-12" }} />

                </div>
            </div>

            {/* Development and tools */}
            <div className="Development-and-tools">
                <h4 className='text-center font-bold mb-3 mt-3 lg:mb-4 lg:mt-5 lg:text-xl'>Development & tools</h4>
                <div className="logos flex gap-7 lg:gap-12 justify-center">

                    <LogosGeneration props={{ img: VisualStudioCode, imgName: "Visual Studio", className: "w-6 h-7 lg:w-10 lg:h-12" }} />
                    <LogosGeneration props={{ img: Github, imgName: "Github", className: "w-6 h-7 lg:w-10 lg:h-12" }} />
                    <LogosGeneration props={{ img: Figma, imgName: "Figma", className: "w-6 h-7 lg:w-10 lg:h-12" }} />

                </div>
            </div>





        </div>
    )
}

export default TechStack