import React from 'react'
import Button from '@mui/material/Button';
import {images} from '../../images/images.js'
import './Home.css';
const Home = () => {
  return (
    <div className='m-4 sm:mt-16 md:mt-24 flex flex-wrap  justify-around text-white'>
       <div className=''>
           <p className='tracking-widest text-slate-400 text-2xl'>I'm a</p>
           <h4 className='abril-fatface-regular 2xl:text-8xl xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-black tracking-widest '>FULL STACK<br></br><span className='bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-700'>SOFTWARE</span><br></br>DEVELOPER.</h4>
           <Button sx={{color:"white"}} className='linkedin-btn'>
  Linked In
</Button>
  </div>
      <div>
        <div className='2xl:h-80 2xl:w-80 xl:h-72 xl:w-72 lg:w-64 lg:h-64 md:h-56 md:w-56 h-52 w-52 rounded-full shadow-2xl shadow-cyan-200'>
        <img src={images.my} className='rounded-full shadow-inner '></img> 
     
        </div>
           </div>
    </div>
  )
}

export default Home
