import React from 'react'
import { useNavigate } from 'react-router-dom';
import './css/works.css';
import { motion as m } from "framer-motion";

 const KaigwaCup = () => {
  const navigate = useNavigate();
  return (
    <m.div className='container'
    initial={{ opacity: 0 }}
    animate={{opacity: 1 }}
    transition={{ duration: 2.1 }}
    >
      
      <div className='title'>
        <strong className='head' >Kaigwa Cup</strong>
        <p className='sub' >Football League</p>
      </div>
     
     <div>
      <a className='link' href="cgkfhcj">KaigwaCup.com</a>
     </div>
       
      <div className='milk'>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima similique quaerat ratione odio doloribus necessitatibus ad distinctio! Voluptates est sapiente aliquid voluptatibus? Vel voluptate nam, eum quaerat dolores quia enim.
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
        <button onClick={() => navigate("/Projects")} className='back'>BACK TO ALL PROJECTS</button>
       </div>
    </m.div>
  )
}
export default KaigwaCup;