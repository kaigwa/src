import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './css/blog.css';
import logo from './logo.png';

function Blog() {

  return (
    <div> 
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

          <div>
            <Link to="/About" className="info">About</Link>
          </div>
            
          <div className="world">
            <Link to="/Blog" className="bw">
              Blog
            </Link>
          </div>

        </header>

  

      <div className="foot">
      
      </div>
    </div>
  )
}
export default Blog;