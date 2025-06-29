import React from 'react'
import ProjectCard from './Project-sections/ProjectCard'
function Projects() {

    return (
        <div id='Projects' className='lg:scroll-mt-[12vh] scroll-mt-[4vh] bg-[#0D0D0D] text-white w-screen p-2 flex flex-col justify-evenly lg:gap-2  font-[Inter] items-center lg:min-h-screen h-screen'>

            <ProjectCard props={{
                projectTitle: "Facebook Login Page Clone",
                description: ["• Developed a responsive clone of the Facebook login page using HTML, CSS, JavaScript, and Tailwind CSS. ",
                    "• Ensured cross-browser compatibility and mobile responsiveness. ",
                    "• Improved user interface with dynamic styling using Tailwind CSS."
                ],
                codeLink: "https://github.com/Khaja-Mohiddin-Shaik/Responsive-Facebok-login-clone",
                liveLink: "https://responsive-my-social-login.onrender.com/"
            }} />

            <ProjectCard props={{
                projectTitle: "Portfolio",
                description: ["• Designed and built a fully responsive personal portfolio website using React and Tailwind CSS to showcase projects and contact information. ",
                    "• Implemented a dynamic navigation system with smooth scrolling and mobile-friendly hamburger menu, enhancing accessibility across devices. ",
                    "• Integrated EmailJS to enable direct messaging functionality, allowing users to send emails without backend setup."
                ],
                codeLink: "https://github.com/Khaja-Mohiddin-Shaik/Portfolio",
                liveLink: "https://portfolio-bdl8.onrender.com"
            }} />

            <ProjectCard props={{
                projectTitle: "College Management System",
                description: ["• Developed a web-based system to manage student and administrative functions.",
                    "• Implemented student and admin login pages, attendance, results, and academic details management.",
                    "• Designed a three-tier architecture using MVC for efficient separation of concerns."
                ],
                codeLink: "https://github.com/Khaja-Mohiddin-Shaik/College-Management",
                liveLink: "#"
            }} />


        </div>
    )
}

export default Projects