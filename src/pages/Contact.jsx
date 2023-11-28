import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  const serviceHandler = ()=>{
    navigate('/service',{replace:true})
  }

  return (
    <div className='btn' onClick={serviceHandler}>Contact</div>
  )
}

export default Contact