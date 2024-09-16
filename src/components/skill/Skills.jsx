import * as React from 'react';
import { images } from "../../images/images.js";
const Skills = () => {
    let skills = [
        { imglink:images.HTML, percent: 95, title: "HTML" },
        { imglink:images.CSS, percent: 90, title: "CSS" },
        { imglink:images.js, percent: 75, title: "Javascript" },
        { imglink:images.react, percent: 60, title: "React.JS" },
        { imglink:images.express, percent: 50, title: "Express" },
        { imglink:images.node, percent: 50, title: "Node.JS" },
        { imglink:images.mongo, percent: 60, title: "MongoDB" }, // Fixed to 80 from 300
        { imglink:images.bootstrap, percent: 95, title: "Bootstrap" },
        { imglink:images.tail, percent: 80, title: "Tailwind CSS" },
        { imglink:images.php, percent: 60, title: "PHP" },
        { imglink:images.sql, percent: 70, title: "MySQL" },
        { imglink:images.java, percent: 80, title: "JAVA" },
        { imglink:images.dsa, percent: 75, title: "DSA" },
    ];

    return (
        <div className="text-center m-4 h-lvh ">
            <h1 className="mb-8 font-bold text-2xl">Skills</h1>

            <div className="h-full mt-12 justify-items-center grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-y-6">
                {skills.map((skill, index) => (
                    <div key={index} className="h-12 sm:h-16 md:h-20 ">
                        <img src={skill.imglink} alt="img" className='h-full mx-auto'/>
                        <div className="progress w-28 h-2 my-2 mx-auto" role="progressbar">
                            <div className="progress-bar progress-bar-striped progress-bar-animated " style={{ width: `${skill.percent}%` }}></div>
                        </div>
                        <p>{skill.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
