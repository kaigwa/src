import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/works.css';

 const Movie = () => {
  const navigate = useNavigate();
  return (
    <div className='container'>
    
     

      <div className='title'>
      <strong >
        Movie App
      </strong>
      <p className='sub'>MOVIE API WEB</p>
      </div>
      

      <div>
        <a 
        href="https://movie-demo-qe74ulmha-kaigwa.vercel.app/" className='link' target='_blank'rel="noreferrer">Movie.com</a>
      </div>
       
        <div className='milk'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ex omnis dolores illo recusandae in voluptatibus exercitationem odit aliquid reprehenderit, nesciunt accusantium. Eaque atque praesentium maiores rem? Magnam, aliquid debitis!
          </p> 
        </div>
       <br />

        <div>
          <video width="320" height="240" controls muted autoPlay>
          {/* <source src={kfvideo} type="video/mp4"/> */}
          </video>
        </div>
        <br />

      <div className='tech'>
        <p>
          This project was developed by using React JS/CSS technologies.
        </p>
      </div>

      <div className='btn'>
        <button
        className='back'
        onClick={() => navigate("/Projects")}>BACK TO ALL PROJECTS</button>
      </div>

    </div>
  )
}
export default Movie;