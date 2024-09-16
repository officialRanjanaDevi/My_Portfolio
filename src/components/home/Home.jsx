import React from "react";
import Button from "@mui/material/Button";
import { images } from "../../images/images.js";
import "./Home.css";
const Home = () => {
  return (
    <div className="headingDiv ">
      <div>
        <p className="tracking-widest text-slate-400 text-2xl">I'm a</p>
        <h4 className=" abril-fatface-regular  mainHeading">
          FULL STACK<br></br>
          <span className="software">SOFTWARE</span>
          <br></br>DEVELOPER<span className="software">.</span>
        </h4>
        <button sx={{ color: "white" }} className="linkedin-btn">
          Linked In
        </button>
      </div>
      <div>
        <div className="imgDiv">
          <img src={images.my} className="rounded-full shadow-inner shadow-slate-600"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
