import React from 'react'
import { useNavigate } from 'react-router-dom';
import './css/works.css';

function Ellipsisdope() {
  const navigate = useNavigate();
  return (
    <div className='container'>
      dope
      <div className='btn'>
        <button onClick={() => navigate("/Projects")} className='back'>BACK TO ALL PROJECTS</button>
       </div>
    </div>
  )
}

export default Ellipsisdope;