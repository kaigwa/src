import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './css/BetterWorld.css';
import { TiTree } from 'react-icons/ti'
import logo from './logo.png';
import SDG from './SDG.png';
import { 
  motion as m, 
  useScroll, 
  useSpring 
} from "framer-motion";

function BetterWorld(){
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {});
  const [isShown, setIsShown] = useState(false);
  return (
    <div>
         <m.div className='bar' style={{ scaleX }} />
         
        <header className="header">
          <div className="edwin">
            <Link to="/" className="edwin">
             <img className="lg" src={logo} alt="logo" />
            </Link>
          </div>

          <div className="works">  
            <Link to="/Projects" className="work">
              Projects
            </Link>
          </div>
        </header>

<m.div className='content'
 initial={{ y: "100%" }}
 animate={{ y: "0%" }}
 transition={{ duration: 2.0 }}
>
      <h3 className='bet'
      >Better World</h3>

      <p className='climate'>
      This is an Initiative started few years back at Kaigwa Farm aiming at planting trees to reduce heat we were facing on our dairy farm while participating in environmental protection. I know this might not be the place, but to my beliefs this movement has to involve everyone in any field in fighting for our planet. Unless we are here to be destroyed by
      <span 
      onMouseEnter={()=> 
      setIsShown(true)}
      onMouseLeave={() => 
      setIsShown(false)}>
        <a href="https://sdgs.un.org/goals/goal13" target='_blank' rel="noreferrer" className='change'>  CLIMATE CHANGE</a>
        </span>
        {isShown && (
              <m.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 0.9 }}
              >
                <img className='heat' src={SDG} alt="climate change" />
              </m.div>
            )}. Most of trees seedlings we are receiving from <a className='tfs' href="https://www.tfs.go.tz/index.php/en" target='_blank' rel="noreferrer">Tanzania Forest Service Agency</a>. As part of World citizens I have this obligation to participate in making our world a better place to live for us and future generation. So me and my team we are aiming at planting more than 1500 trees in 5 years which we already planted 100+ trees on our farm and later will be somewhere else. Through collaboration with you through work I believe we can achieve something <span className='w'>BETTER</span>  for our <span className='w'>WORLD!</span> Thank you taking care our planet. 
      </p> 
      <br />
    
      <div className='c'>
            <div>
              <hr className='hr'/>
            </div>
            <div className='gift'>
              <div className='tree'><span className='t'><TiTree/></span>
              </div>
              <div className='l'>
                <span>
                  Location: Mkuranga/Pwani</span>
                  </div>
              <div className='yr'>
                2022
              </div>
            </div>
            
            
            <div>
              <hr className='hr'/>
            </div>
            <div className='gift'>
              <div className='tree'><span className='t'><TiTree/><TiTree/></span></div>
                  <div className='l'><span>Location: </span></div>
                    <div className='yr'>2023</div>
            </div>
            
            <div>
              <hr className='hr'/>
            </div>
            <div className='gift'>
              <div className='tree'><span className='t'><TiTree/><TiTree/><TiTree/></span></div>
                  <div className='l'><span>Location: </span></div>
                    <div className='yr'>2024</div>
            </div>
           
          
            <div>
              <hr className='hr'/>
            </div>
            <div className='gift'>
            <div className='tree'><span className='t'><TiTree/><TiTree/><TiTree/><TiTree/></span></div>
                <div className='l'><span>Location: </span></div>
                  <div className='yr'>2025</div>
            </div>
           
            <div>
              <hr className='hr'/>
            </div> 
            <div className='gift'>
            <div className='tree'><span className='t'><TiTree/><TiTree/><TiTree/><TiTree/><TiTree/></span></div>
                <div className='l'><span>Location: </span></div>
                  <div className='yr'>2026</div>
            </div>
            
            <div>
              <hr className='hr'/>
            </div> 
      </div>
      
</m.div>
  

      <div className="foot">
        <div>
          <Link to="/About" className="info">About</Link>
        </div>
          
        <div className="world">
          <Link to="/BetterWorld" className="bw">
            Better World
          </Link>
        </div>
      </div>
    </div>
  )
}
export default BetterWorld;