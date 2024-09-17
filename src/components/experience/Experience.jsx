import React from "react";
import './Experience.css';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import { images } from "../../images/images.js";
const Experience = () => {
  return (
    <div className="container" id="experience">
      <h1 className="heading">Experience and Education</h1>
      <div>
        <ul>
           <li className="card-box">
            <img src={images.mood} alt="img" className="sm:h-24 sm:w-28 h-12 w-12" />
            <div className="sm:text-center md:text-left mx-8 w-5/6 md:w-2/5">
              <h1 className="text-lg font-bold">Frontend Developer(aug-2023 oct-2023)</h1>
              <p className="mb-3 text-gray-400">Acmegrade, Mood Indigo (IIT Bombay)</p>
              <a href="" className="view">View Credentails < LaunchRoundedIcon /></a> 
            </div>
          </li>
          <li className="card-box">
            <img src={images.hnb} alt="img" className="sm:h-24 sm:w-28 h-12 w-12" />
            <div className="sm:text-center md:text-left mx-8 w-5/6 md:w-2/5">
              <h1 className="text-lg font-bold">Bachelor Of Technology (2021-25)</h1>
              <p className="text-gray-400">Hemvati Nandan Bahuguna Garhwal University, Srinagar Uttarakhand</p>
              <p className=" text-gray-400">CGPA: 7.3 (current) </p>
            </div>
          </li>
          <li className="card-box">
            <img src={images.aps} alt="img" className="sm:h-24 sm:w-28 h-12 w-12" />
            <div className="sm:text-center md:text-left mx-8 w-5/6 md:w-2/5">
              <h1 className="text-lg font-bold">Intermediate (2020)</h1>
              <p className="text-gray-400">Army Public School No-1 Roorkee, Uttarakhand</p>
              <p className="text-gray-400">Percentage: 84.4 %</p>
            </div>
          </li>
          <li className="card-box">
            <img src={images.aps} alt="img" className="sm:h-24 sm:w-28 h-12 w-12" />
            <div className="sm:text-center md:text-left mx-8 w-5/6 md:w-2/5">
              <h1 className="text-lg font-bold">High School (2018)</h1>
              <p className=" text-gray-400">Army Public School No-1 Roorkee, Uttarakhand</p>
              <p className="text-gray-400">Percentage: 90.1 %</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
