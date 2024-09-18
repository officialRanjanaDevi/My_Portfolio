import React from "react";
import Button from "@mui/material/Button";
import { images } from "../../images/images.js";
import "./Home.css";
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants.js";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["FULL STACK","SOFTWARE" ],
    loop: 0, // Infinite loop
    delaySpeed: 2500, // Pause before typing each word
  });

  return (
    <div className="headingDiv sm:h-5/6" id="home">
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}
      >
        <p className="tracking-widest text-slate-400 text-2xl">I'm a</p>
        <h4 className=" abril-fatface-regular mainHeading">
          <spam className="software"> {text}<Cursor cursorColor="#aaa" /></spam>
         <br/>DEVELOPER<spam className="software">.</spam>
          
        </h4>
        <button sx={{ color: "white" }} className="linkedin-btn">
          <a href="https://www.linkedin.com/in/ranjana-devi-58976327b">
            Linked In
          </a>
        </button>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}
      >
        <div className="imgDiv">
          <img
            src={images.my}
            className="rounded-full shadow-inner shadow-slate-600"
            alt="Profile"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
