import React from "react";
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import { images } from "../../images/images.js";
const Experience = () => {
  return (
    <div className="mt-32 text-center h-screen">
      <h1 className="mb-8 font-bold text-2xl">Experience and Education</h1>
      <div>
        <ul className="">
           <li className="flex flex-wrap justify-center  my-8">
            <img src={images.mood} alt="img" className="h-24 w-28" />
            <div className="sm:text-center md:text-left mx-8 w-5/6 md:w-2/5">
              <h1 className="text-lg font-bold">Frontend Developer(aug-2023 oct-2023)</h1>
              <p className="mb-3 text-gray-400">Acmegrade, Mood Indigo (IIT Bombay)</p>
              <a href="" className="hover:text-sky-500 border-2 border-gray-500 hover:border-sky-500 p-2 rounded-md ">View Credentails < LaunchRoundedIcon /></a> 
            </div>
          </li>
          <li className="flex flex-wrap justify-center  my-8">
            <img src={images.hnb} alt="img" className="h-24 w-24" />
            <div className="sm:text-center md:text-left mx-8 w-5/6 md:w-2/5">
              <h1 className="text-lg font-bold">Bachelor Of Technology (2021-25)</h1>
              <p className="text-gray-400">Hemvati Nandan Bahuguna Garhwal University, Srinagar Uttarakhand</p>
              <p className=" text-gray-400">CGPA: 7.3 (current) </p>
            </div>
          </li>
          <li className="flex flex-wrap justify-center  my-8">
            <img src={images.aps} alt="img" className="h-24 w-24" />
            <div className="sm:text-center md:text-left mx-8 w-5/6 md:w-2/5">
              <h1 className="text-lg font-bold">Intermediate (2020)</h1>
              <p className="text-gray-400">Army Public School No-1 Roorkee, Uttarakhand</p>
              <p className="text-gray-400">Percentage: 84.4 %</p>
            </div>
          </li>
          <li className="flex flex-wrap justify-center  my-8">
            <img src={images.aps} alt="img" className="h-24 w-24" />
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
