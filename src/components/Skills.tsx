import { useEffect } from "react";
import "../style/skills.scss";
import { ICONS_BY_KEY } from "./Icon";

function Skills() {
  const skills = [
    {
      name: "angular",
      text: "I’m currently learning Angular and building a web app where you manage shared todos with a partner, including a points and rewards system.",
    },
    {
      name: "react",
      text: "I built this website using React.",
    },
    {
      name: "scss",
      text: "I use SCSS for all my styling because it keeps my design clean and scalable, and I genuinely enjoy working with it.",
    },
    {
      name: "html",
      text: "HTML is the core foundation of web development, so it’s always part of my workflow.",
    },
    {
      name: "java",
      text: "I’m learning Java in my apprenticeship and used it to build multiple backend applications.",
    },
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
      },
    );

    icons.forEach((icon) => {
      observer.observe(icon);
    });
  });


  return (
    <div className="skill-section">
      <h1>Skills</h1>
      <div className="skill-container">
        {skills.map((skill) => {
             const def = ICONS_BY_KEY[skill.name];
                if(!def) return null;

                const Icon = def.icon;
                return(
          <div className="skill-card">
            <div className="face face1">
              <div className="content">
                <p>{skill.text}</p>
              </div>
            </div>
            <div className="face face2">
                  <h2>
                  <Icon className="icon-skill"/></h2>
          </div>
           </div>
        )})}
      </div>
    </div>
  );
}

export default Skills;
