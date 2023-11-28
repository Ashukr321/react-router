import React from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {
  const navigate = useNavigate();
  const contactHandler = ()=>{
    navigate('/contact' ,{replace:true})
  }
  return (

    <div>
      <button onClick={contactHandler} className='btn'>go to contact</button>
    </div>
    
  )
}

export default About