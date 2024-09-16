import React from 'react'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import AboutMe from './components/aboutme/AboutMe'
import Project from './components/projects/Project'
const App = () => {
  return (
    <div className='balsamiq-sans-regular'>
      <Navbar/>
      
      <Home/> 

      <AboutMe/>

      <Project/>
    </div>
  )
}

export default App
