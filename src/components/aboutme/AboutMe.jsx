import React from "react";
import "./AboutMe.css";
import Button from "@mui/material/Button";
import { images } from "../../images/images.js";
const AboutMe = () => {
  return (
    <div className="aboutmeContainer h-5/6">
      <div className="imgBox md:h-64 lg:h-80 xl:h-84">
        <img src={images.my} className="img shadow-inline"></img>
      </div>
      <div className="h-96 m-4 w-full sm:w-2/4">
        <h1 className="font-bold text-2xl mb-4">ABOUT ME</h1>
        <p className="mb-4 text-gray-400">
          I'm a frontend developer passionate about creating stunning,
          responsive web applications. I’m mastering the latest technologies,
          turning creative ideas into engaging user experiences, and refining my
          skills with each project.<br></br> Explore my work and join me in turning code
          into dynamic, seamless websites. Let’s build something amazing
          together!
        </p>
        <button sx={{ color: "white" }} className="resume-btn ">
          Resume
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
