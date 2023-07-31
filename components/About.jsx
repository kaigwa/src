import React, { useState } from 'react'
import { 
  Link,
  // useNavigate
} from "react-router-dom";
import './css/about.css';
import logo from './logo.png';
import { 
  motion as m, 
  useScroll, 
  useSpring 
} from "framer-motion";
import { } from "react-router-dom";
import Guadalajara from './Guadalajara';
import Dar from './Dar'

 function About() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [isGuadalajara, setIsGuadalajara] = useState(false); const [isDar, setIsDar] = useState(false);
  // const navigate = useNavigate();
  return (
    <div className='page'
    
    >
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

       <m.div className="story"
       initial={{ y: '100%'}}
       animate={{ y: '0%' }}
       transition={{ duration: 2.0 }}
       >
        <h3 className='abt'>About</h3>
          <p className='me'>
            Travelled to 
            <span
            onMouseEnter={()=>
          setIsGuadalajara(true)}
          onMouseLeave={()=>
          setIsGuadalajara(false)}
            className='mexico'> Guadalajara
            </span> 
            {isGuadalajara &&(
              <Link to="/guadalajara">{<Guadalajara/>}
              </Link>
            )}
            <br />
            for birth of my daughter <span>Imani</span> changed my life due to staying on AirBnB full of internet and my farm operations was handled through WhatsApp. So! I was having alot of time thinking on what to do from not watching movies only. I started doing research on working online and which skill set required...I endup on <span><a href="https://www.freecodecamp.org/" target='_blank' rel="noreferrer" className='fcc'>freecodecamp</a></span> learning skills like HTML/CSS/JavaScript. Then, came back to <span
            onMouseEnter={()=>
          setIsDar(true)}
          onMouseLeave={()=>
          setIsDar(false)}
            className='tanzania'>Dar es Salaam</span>
            {isDar &&(
              <Link to="/dar">
                {<Dar/>}
              </Link>
            )} <br />
             and get a life changing opportunity to start internship at <a href="https://ellipsis.co.tz/" target='_blank'rel="noreferrer" className='ell'>Ellipsis Digital</a> and this should be my appreciation to them, So let's make something great by reachout to me for amazing new projects.
          </p>
        </m.div>

      <div className='contact'>
        <a className='mail' href="mailto:kaigwaedwin@gmail.com">Mail</a>

        <a className='number' href="tel:+255684423624">
        Call
        </a>

        <a className='twit' href="https://twitter.com/Elugakingira" target='_blank' rel="noopener noreferrer" >Twitter</a>
      </div>

          
      <div className="ft">  
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
export default About;