import React from 'react'
import { useNavigate } from 'react-router-dom';
import './css/works.css';

function Bububu() {
  const navigate = useNavigate();
  return (
    <div className='container'>
      bububu
      <div className='btn'>
        <button onClick={() => navigate("/Projects")} className='back'>BACK TO ALL PROJECTS</button>
       </div>
    </div>
  )
}

export default Bububu