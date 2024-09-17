import React from "react";
import './Service.css'
const Service = () => {
  return (
    <div className="text-center h-screen" id="services">
      <h1 className="mb-8 font-bold text-2xl">Services</h1>
      <div className="card-grid ">
        <div className=" service-card">
          <img></img>
          <h1 className="text-xl font-bold">Front End Development</h1>
          <p className="card-text">
            I am good at creating responsive user-friendly and dynamic
            components of website or web application. Ensuring smooth user experience (UI/UX). For that I have skills
            like HTML, CSS Javacript, React, Tailwind CSS, Bootstrap etc.
          </p>
        </div>
        <div className=" service-card">
          <img></img>
          <h1 className="text-xl font-bold">Full Stack Development</h1>
          <p  className="card-text">
            I can handles all aspects of a web project, from designing user
            interfaces to managing databases and server logic. Creating
            responsive designs,Building
            and managing servers, Handling business logic, database management,
            and API integration. For this I know MERN Stack.
          </p>
        </div>

        <div className="service-card ">
          <img></img>
          <h1 className="text-xl font-bold">YouTube Videos</h1>
          <p  className="card-text">
            I also upload teaching content on YouTube. I make videos related to
            Data Structures and Algorithms in which I solve DSA questions and
            explain different approches with the solution (in JAVA). I have also compeleted a 100 day DSA challenge .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
