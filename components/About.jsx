import React from 'react'
import { 
  Link,
  // useNavigate
} from "react-router-dom";
import './css/about.css';
import logo from './logo.png';
// import { } from "react-router-dom";


 function About() {
  return (
    <div className='page'>
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

      

      <div className='contact'>
        <a className='mail' href="mailto:kaigwaedwin@gmail.com">Mail</a>

        <a className='number' href="tel:+255684423624">
        Call
        </a>

        <a className='twit' href="https://twitter.com/Elugakingira" target='_blank' rel="noopener noreferrer" >Twitter</a>
      </div>

          
      <div className="ft">  
   
      </div>
    </div>
  )
}
export default About;