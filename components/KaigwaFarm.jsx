import React from 'react';
import { useNavigate } from 'react-router-dom';
import kfvideo from './kfvideo.mp4'
import './css/works.css';

const KaigwaFarm = () => {
  const navigate = useNavigate();
  return (
    <div className='container'>
      <div className='title'>
        <strong className='head'>
          Kaigwa Farm
        </strong>
        <p className='sub'>DAIRY FARM/AGRIBUSINESS</p>
      </div>
      
      <div>
        <a className='link' href="https://kaigwa.github.io/kaigwafarms/">Kaigwa Farm Landing Page</a>
      </div>
        
     <div className='milk'>
      <p>This is the dairy farm project of mine which located here in Tanzania. Started this after long struggle in agribusiness. As part of my learning curve I had to do this project and it was my first project to publish online. 
      </p> 
     </div>

     <div className='video'>
      <video width="320" height="240" controls muted autoPlay >
          <source src={kfvideo} type="video/mp4"/>
      </video>
     </div>

      <div className='tech'>
        <p>
          This project was developed by using Html/CSS/JavaScript.
        </p>
      </div>

      <div className='btn'>
        <button onClick={() => navigate("/Projects")} className='back'>BACK TO ALL PROJECTS</button>
      </div>
    </div>
  )
}
export default KaigwaFarm