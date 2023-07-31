import React from "react";
import './css/home.css';
import { Link } from "react-router-dom";
import logo from './logo.png';


const Home = () => {
  return (
    <div className="contain">
         
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

          <div className="i">
            <Link to="/About" className="info">
              About
            </Link>
          </div>     
          
          <div className="grn">
            <Link to="/Blog" className="bw">
              Blog
            </Link>
          </div>

        </header>
   
          <div>
            <p className="hi">Hi!</p>
          </div>
          <div className="intro">
            I am <span className="lugakingira">Edwin Lugakingira</span> A Front-end Developer based in Dar es Salaam and <span className="gdl">Guadalajara</span> <span className="stop">.</span>
          </div>
     

        {/* <div className="footer">
       
        </div> */}
    </div>
   
  )
}
export default Home;