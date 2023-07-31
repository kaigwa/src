import React from "react";
import './css/home.css';
import { Link } from "react-router-dom";
import logo from './logo.png';
import { 
  motion as m, 
  useScroll, 
  useSpring } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div className="contain"
   
    >
         <m.div className='bar' style={{ scaleX }} />
         
        <header className="header">
          <div className="edwin">
            <Link to="/" className="edwin">
             <img className="lg" src={logo} alt="logo" />
            </Link>
          </div>

          <div className="works">  
            <Link to="/Projects" className="work">Projects
            </Link>
          </div> 
        </header>
  
     
      <m.div className="center"
       initial={{ opacity: 0 }}
       animate={{opacity: 1 }}
       transition={{ duration: 2.1 }}
      >
          <div>
            <p className="hi">Hi!</p>
          </div>
          <div className="intro">
            I am <span className="lugakingira">Edwin Lugakingira</span> A Front-end Developer based in Dar es Salaam and <span className="gdl">Guadalajara</span> <span className="stop">.</span>
          </div>
      </m.div>

        <div className="footer">
        <div className="i">
            <Link to="/About" className="info">
              About
            </Link>
          </div>     
          
          <div className="grn">
            <Link to="/BetterWorld" className="bw">
              Better-World
            </Link>
          </div>

          <div>
          <Link to="/Podcast" className="pc">
              Podcast
            </Link>
          </div>
       
        </div>
    </div>
   
  )
}
export default Home;