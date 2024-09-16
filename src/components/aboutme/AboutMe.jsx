import React from "react";
import "./AboutMe.css";
import Button from "@mui/material/Button";
import { images } from "../../images/images.js";
const AboutMe = () => {
  return (
    <div className="aboutmeContainer">
      <div className="imgBox md:h-64 lg:h-80 xl:h-84">
        <img src={images.my} className="img shadow-inline"></img>
      </div>
      <div className="h-96 m-4 w-full sm:w-2/4">
        <h1 className="font-bold text-2xl mb-4">ABOUT ME</h1>
        <p className="mb-4 text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime aut
          exercitationem nobis iure iusto, cupiditate deserunt minus, delectus
          consequatur, mollitia veritatis fugit aliquam! Veniam nemo ipsa autem
          corrupti. Praesentium, veritatis?
        </p>
        <button sx={{ color: "white" }} className="resume-btn ">
          Resume
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
