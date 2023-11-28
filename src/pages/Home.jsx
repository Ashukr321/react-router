import React from 'react'
import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate();

  const aboutHandler = ()=>{
    navigate('/about',{replace:true})
  }

  return (
    <div className='home'>
      <h1>welcome to learning React-Router dom </h1>
      <button onClick={aboutHandler} className='btn'>about</button>
    </div>
  )
}

export default Home