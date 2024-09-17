import React from 'react';
import './Project.css'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { images } from "../../images/images.js";
const TabContent = ({ value }) => {
  const projects = [
    { key: 'one', type: "Front End", title:"Weather Forecast", stack:["React","NodeJs","Tailwind CSS","Javascript"],description: "It is a static site developed using react and data is fetched by Weather API.Responsive weather forecast site that provides real-time data like: Temperature ,Humidity , Wind speed ,Cloud coverage, Feels like temperature, Date, Time, City & Country. ", livelink: "https://weather-forecast-j423.onrender.com", imglink: "uhbkjkjnebjfjknkjbw b man bcmb amwbe " },
    { key: 'two', type: "Front End", title:"To Do App", stack:["React","NodeJs","Tailwind CSS","Javascript"],description: "A simple yet powerful project. Fully responsive with Key features link adding a new task, marking it done, deleting task and a progress bar to track.", livelink: "https://to-do-app-if8g.onrender.com", imglink: "uhbkjkjnebjfjknkjbw b man bcmb amwbe " },
    { key: 'three', type: "Full Stack", title:"Wanderlust", stack:["HTML","CSS","Javascript","NodeJs","Express","MongoDB","Bootstrap"],description: "Wanderlust is a sleek and user-friendly platform inspired by Airbnb, designed to help travelers find their perfect getaway.", livelink: "https://wanderlust-tj9y.onrender.com/listings", imglink: "uhbkjkjnebjfjknkjbw b man bcmb amwbe " },
    { key: 'four', type: "Full Stack", title:"Bike Rental Website", stack:["HTML","CSS","Javascript","PHP","Bootstrap",],description: "Functional Bike rental service with admin dashboard and user-friendly Interface. Client can browse and book bikes after being registered also can contact to admin.", livelink: "anerlne,fnsenfn,kenfnewf", imglink: "uhbkjkjnebjfjknkjbw b man bcmb amwbe " },
     ];

  // Filter projects where the title matches the value
  const filteredProjects = projects.filter(project => project.type === value);
  console.log(filteredProjects);
  console.log(value);
  return (
    <div>{filteredProjects.map((project, index) => (
      <div key={index} className={`card-div  ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className='card-text w-3/4  sm:w-3/5 md:w-1/3 lg:w-1/3 xl:w-1/4'>
          <h2 className='text-xl text-white'>{project.title}</h2>
          <p >{project.description}</p>
          <h2 className='my-2'>Technology Stack used :-</h2>
          <ul> {project.stack.map((tech, index) => ( 
            <li className=' my-0.5'><KeyboardArrowRightRoundedIcon className='icon'></KeyboardArrowRightRoundedIcon> &nbsp;{tech}</li>
          ))}
            
          </ul>
          <button className='live-btn text-white'><a  href={project.livelink} >Live Link</a></button>
        </div>
  
        <div className=' sm:w-3/5  md:w-1/3 lg:1/3 xl:w-1/4 imgBox'>
          <img src={images.my} alt="alt" className='img h-full w-full'/>
        </div>
      </div>
    ))}
  </div>
  
  );
}

export default TabContent;
