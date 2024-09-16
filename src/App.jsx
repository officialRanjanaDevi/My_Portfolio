import React from 'react'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import AboutMe from './components/aboutme/AboutMe'
import Project from './components/projects/Project'
import Skills from './components/Skill/Skills'
import Experience from './components/experience/experience'
const App = () => {
  return (
    <div className='balsamiq-sans-regular'>
      <Navbar/>
      
      <Home/> 

      <AboutMe/>

      <Project/>

      <Skills/>
      
      <Experience/>
    </div>
  )
}

export default App
