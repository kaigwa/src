import React, { useState } from 'react'
import './css/projects.css'
import {
  Link, 
  // useNavigate 
} from "react-router-dom";
import logo from './logo.png'

 function Projects() {
  // const navigate = useNavigate();
  return (
    <div>
      <header className="header">
          <div className="edwin">
            <Link to="/" className="edwin">
             <img className="lg" src={logo} alt="logo" />
            </Link>
          </div>

          <div>  
            <Link to="/Projects" className="work">
              Projects
            </Link>
          </div>

          <div>
            <Link to="/About" className="info">About</Link>
          </div>
         
          <div className="world">
            <Link to="/Blog" className="bw">
              Blog
            </Link>
          </div>
        </header>
    

     
      
      <div className="ftr">
       
      </div>
    </div>
  )
}
export default Projects;