import React from "react";
import "./Project.css";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { images } from "../../images/images.js";
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants.js";

const TabContent = ({ value }) => {
  const projects = [
    {
      key: "one",
      type: "Front End",
      title: "Weather Forecast",
      stack: ["React", "NodeJs", "Tailwind CSS", "Javascript"],
      description:
        "It is a static site developed using react and data is fetched by Weather API.Responsive weather forecast site that provides real-time data like: Temperature ,Humidity , Wind speed ,Cloud coverage, Feels like temperature, Date, Time, City & Country. ",
      livelink: "https://weather-forecast-j423.onrender.com",
      imglink:images.weather,
    },
    {
      key: "two",
      type: "Front End",
      title: "To Do App",
      stack: ["React", "NodeJs", "Tailwind CSS", "Javascript"],
      description:
        "A simple yet powerful project. Fully responsive with Key features link adding a new task, marking it done, deleting task and a progress bar to track.",
      livelink: "https://to-do-app-if8g.onrender.com",
      imglink: images.todo,
    },
    {
      key: "three",
      type: "Full Stack",
      title: "Wanderlust",
      stack: [
        "HTML",
        "CSS",
        "Javascript",
        "NodeJs",
        "Express",
        "MongoDB",
        "Bootstrap",
      ],
      description:
        "Wanderlust is a sleek and user-friendly platform inspired by Airbnb, designed to help travelers find their perfect getaway.",
      livelink: "https://wanderlust-tj9y.onrender.com/listings",
      imglink: images.wanderlust,
    },
    {
      key: "four",
      type: "Full Stack",
      title: "Bike Rental Website",
      stack: ["HTML", "CSS", "Javascript", "PHP", "Bootstrap"],
      description:
        "Functional Bike rental service with admin dashboard and user-friendly Interface. Client can browse and book bikes after being registered also can contact to admin.",
      livelink: "anerlne,fnsenfn,kenfnewf",
      imglink: images.bike ,
    },
  ];

  // Filter projects where the title matches the value
  const filteredProjects = projects.filter((project) => project.type === value);
  console.log(filteredProjects);
  console.log(value);
  return (
    <div   >
      {filteredProjects.map((project, index) => (
        <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }} 
          key={index}
          className={`card-div  ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className=" w-3/4  sm:w-3/5 md:w-1/3 lg:w-1/3 xl:w-1/4">
            <h2 className="text-xl text-left font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-900">
              {index + 1}. {project.title}
            </h2>
            <p className="card-text text-gray-500">{project.description}</p>
            <h2 className="my-2 card-text text-gray-500">
              Technology Stack used :-
            </h2>
            <ul>
              {" "}
              {project.stack.map((tech, index) => (
                <li className="card-text text-gray-500 my-0.5">
                  <KeyboardArrowRightRoundedIcon className="icon"></KeyboardArrowRightRoundedIcon>{" "}
                  &nbsp;{tech}
                </li>
              ))}
            </ul>
            <button className="live-btn text-white">
              <a href={project.livelink}>Live Link</a>
            </button>
          </div>

          <div  className=" sm:w-3/5  md:w-1/3 lg:1/3 xl:w-1/4 imgBox">
            <img src={`${project.imglink}`} alt="alt" className="img h-full w-full" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TabContent;
