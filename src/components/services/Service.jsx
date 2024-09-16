import React from "react";

const Service = () => {
  return (
    <div className="text-center">
      <h1 className="mb-8 font-bold text-2xl">Services</h1>
      <div className="flex flex-wrap justify-evenly ">
        <div className=" h-5/6 w-1/4 mx-4 border-2 rounded-md p-4 ">
          <img></img>
          <h1 className="text-xl font-bold">Front End Development</h1>
          <p className="text-gray-400 text-justify">
            I am good at creating responsive user-friendly and dynamic
            components of website or web application . For that I have skills
            like HTML, CSS Javacript, React, Tailwind CSS, Bootstrap etc.
          </p>
        </div>
        <div className=" h-5/6 w-1/4 mx-4 border-2 rounded-md p-4 ">
          <img></img>
          <h1 className="text-xl font-bold">Full Stack Development</h1>
          <p  className="text-gray-400 text-justify">
            I can handles all aspects of a web project, from designing user
            interfaces to managing databases and server logic. Creating
            responsive designs, Ensuring smooth user experience (UI/UX),Building
            and managing servers, Handling business logic, database management,
            and API integration. For this I know MERN Stack.
          </p>
        </div>

        <div className=" h-5/6 w-1/4 mx-4 border-2 rounded-md p-4 ">
          <img></img>
          <h1 className="text-xl font-bold">YouTube Videos</h1>
          <p  className="text-gray-400 text-justify">
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
