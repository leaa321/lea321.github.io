import { useEffect } from "react";
import "../style/skills.css";
import {
  IoLogoAngular,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoSass,
} from "react-icons/io5";

function Skills() {
  const skills = [
  {
    name: "Angular",
    icon: <IoLogoAngular className="icon-skill" />,
    text: "I’m currently learning Angular and building a web app where you manage shared todos with a partner, including a points and rewards system.",
  },
  {
    name: "React",
    icon: <IoLogoReact className="icon-skill" />,
    text: "I built this website using React.",
  },
  {
    name: "SCSS",
    icon: <IoLogoSass className="icon-skill" />,
    text: "I use SCSS for all my styling because it keeps my design clean and scalable, and I genuinely enjoy working with it.",
  },
  {
    name: "HTML",
    icon: <IoLogoHtml5 className="icon-skill" />,
    text: "HTML is the core foundation of web development, so it’s always part of my workflow.",
  },
  {
    name: "Java",
    icon: <i className="fa-brands fa-java"></i>,
    //fontawesome
    text: "I’m learning Java in my apprenticeship and used it to build multiple backend applications.",
  }
];
  useEffect(() => {
    const icons = document.querySelectorAll(".skill-card");
    if (icons.length === 0 || !icons) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    icons.forEach((icon) => {
      observer.observe(icon);
    });
  });

  return (
    <div className="skill-section">
      <h1>Skills</h1>
      <div className="skill-container">
          {skills.map((skill) => (
            <div className="skill-card">
              <div className="face face1">
                <div className="content">
                  <p>{skill.text}</p>
            </div>
            </div>

            <div className="face face2" >
              <h2 className="icon-skill">{skill.icon}</h2>
            </div>
            </div>
          ))}
      </div>
    </div>

  );
}

export default Skills;
