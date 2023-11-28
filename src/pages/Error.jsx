import React from 'react'
import '../styles/Error.css'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate();
  const homeHandler = ()=>{
      navigate('/',{replace:true})
  }
  
  return (
    <div className='error'>
      <h1>something went wrong</h1>
      <h2>404</h2>
      <button onClick={homeHandler} className='btn'>Go to Home</button>
    </div>
  )
}

export default Error