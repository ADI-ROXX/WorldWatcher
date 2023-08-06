import React from 'react'
import "./about.css"
import { Link } from 'react-router-dom'
const About = () => {
  return (

    <div>
    <div className="h-[70px] w-screen bg-slate-300 flex items-center justify-between">

        <div className="flex items-center  gap-4 pl-4">
        <Link to="/" className='text-[20px]'>TheFourthPillar</Link>

          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

        </div>
    </div>
    
    <div className="flex  items-center justify-center pt-0 pb-10 min-h-[calc(100vh_-_64px)] bg-white">
        <div className='min-h-[80%] w-[80%] flex flex-col bg-slate-200'>
            <p className="name text-white h-[10%] flex items-center pl-5 font-quick text-[40px] font-semibold">About Me</p>
            <div className='flex flex-row justify-between'>

                <div className='p-4  w-[calc(100%_-_340px)] bg-blue400'>

                    <p className="break-words text-[27px] ">Hi, I am Aditya Ruhela</p>
                    <p className="name h-[8px] w-[250px] rounded-[2px] mb-2">&nbsp;</p>
                    <ul className="list-disc flex flex-col gap-[10px] pl-4 text-[20px]">
                    <li><p className="break-words">I am equipped with the skill of web development not limiting only to Frontend Development but also Backend Development.</p></li>
                    <li><p className="break-words">Made projects using modern web development technologies.</p></li>
                    <li><p className="break-words">Worked with Tailwind and MUI for beautification and am pretty good in it.</p></li>
                    <li><p className="break-words">Worked with Express and Axios for API calling for Backend Development.</p></li>
                    <li><p className="break-words">For animation and 3D rendering, familiar with FramerMotion and ReactThreeFiber.</p></li>
                    <li><p className="break-words">Made multiple projects with ReactJS and am proficient in it.</p></li>
                    <li><p className="break-words">Apart from knowing a lot about WebDev Technologies, have made projects in Python related to Web Scraping and Email Monitoring.</p></li>
                    <li><p className="break-words">Proficient in DSA and have solved many problems with C++</p></li>
                        
                    
                    

                    </ul>
                </div>

                <div className="flex flex-col">
                    <img src="/profilepic.jpeg" className="w-[300px] rounded-full h-[300px] ml-6 mt-10 mr-10 object-cover"/>


                <div class="icon-box">

                    <a href="mailto:adityaruhela2003@gmail.com" title="Gmail" class="box">
                        <i class="fab fa-google"></i>
                    </a>

                    <a href='https://linkedin.com/in/aditya-ruhela-4b2106266' title="LinkedIn" class="box">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a  target="_blank" title="Portfolio" class="box">
                        <img src="/portfolio.png"/>
                    </a>
                </div>

                </div>
            </div>

        </div>



    </div>

    </div>
  )
}

export default About;