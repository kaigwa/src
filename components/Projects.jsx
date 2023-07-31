import React, { useState } from 'react'
import soka from "./kaigwa cup.jpg";
import dope from "./dope.png";

import kaigwafarm from './kaigwafarm.png';
import MovieApi from './MovieApi.png';
import Bububu from './bububu.png';
import './css/projects.css'
import { Link, useNavigate } from "react-router-dom";
import logo from './logo.png'
import { motion as m,
  useScroll, 
  useSpring 
} from "framer-motion";

 function Projects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {});

  const [isShown, setIsShown] = useState(false);
  const [isPotrait, setIsPotrait] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const [isShine, setIsShine] = useState(false)
  const [isDope, setIsDope] = useState(false)
  const navigate = useNavigate();
  return (
    <div>
      <m.div className='bar' style={{ scaleX }} />
      <header className="header">
          <div className="edwin">
            <Link to="/" className="edwin">
             <img className="lg" src={logo} alt="logo" />
            </Link>
          </div>

          <div className="work">  
            <Link to="/Projects" className="work">
              Projects
            </Link>
          </div>
        </header>
     
     <m.div className='project'
      initial={{ opacity: 0 }}
      animate={{opacity: 1 }}
      transition={{ duration: 2.1 }}
     >
     
      <br />
          <ol>
            <li> 
              <button  onMouseEnter={()=> setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            onClick={() => navigate('/KaigwaFarm')} className='b'> 
              Kaigwa Farm
            </button>
          
            {isShown && (
              <div className=''>
                <img className='image' src={kaigwafarm} alt="kaigwafarm" />
              </div>
            )}
            </li>

            <li>
              <button onMouseEnter={()=> setIsPotrait(true)}
              onMouseLeave={() => setIsPotrait(false)}
              onClick={() => navigate('/KaigwaCup')}
              className='b'
              >Kaigwa Cup</button>
              {isPotrait && (
                <div className=''>
                  <img className='image' src={soka} alt="soka" />
                </div>
              )}
            </li>

            <li>
              <button onMouseEnter={()=> setIsVideo(true)}
              onMouseLeave={() => setIsVideo(false)}
              onClick={() => navigate('/Movie')}
              className='b'
              >Movie API</button>
              {isVideo && (
                <div className=''>
                  <img className='image' src={MovieApi} alt="movie" />
                </div>
              )}
            </li>
       
            <li>
              <button onMouseEnter={()=> setIsShine(true)}
              onMouseLeave={() => setIsShine(false)}
              onClick={() => navigate('/bububu')}
              className='b'
              >Bububu-Zanzibar</button>
              {isShine && (
                <div className=''>
                  <img className='image' src={Bububu} alt="bububu" />
                </div>
              )}
            </li>

            <li>
              <button className='b'
               onMouseEnter={()=> setIsDope(true)}
               onMouseLeave={() => setIsDope(false)}
               onClick={() => navigate('/ellipsisdope')} 
               >Ellipsis-DOP@E</button>
               {isDope && (
                 <div className=''>
                   <img className='img' src={dope} alt="dope" />
                   </div>
                   )}
            </li>
          </ol>
 
 <br />
          <div className='ux'>
      Workflow
        <ol>
          <li>Learn</li>
          <li>Think</li>
          <li>Create</li>
        </ol>
      </div>
      
      <div className='ux'>
        Skillset
        <ul>
          <li>UX Design</li>
          <li>Html</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React JS</li>
          
        </ul>
      </div>
      
     </m.div>
<br />
     
      
      <div className="ftr">
          <div>
            <Link to="/About" className="info">About</Link>
          </div>
         
          <div className="world">
            <Link to="/BetterWorld" className="bw">
              Better-World
            </Link>
          </div>
      </div>
    </div>
  )
}
export default Projects;