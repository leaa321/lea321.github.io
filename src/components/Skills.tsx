import { useEffect } from "react";
import "../style/skills.scss";
import { ICONS_BY_KEY } from "./Icon";

function Skills() {
  const skills = [
    {
      name: "Angular",
      key: "angular",
      text: "I’m learning Angular by building a shared to-do app and I'm really enjoying working with the framework.",
    },
    {
      name: "React",
      key: "react",
      text: "I built this website using React, focusing on a clean and simple structure.",
    },
    {
      name: "Sass",
      key: "scss",
      text: "I use Sass for styling because it keeps the design clean and scalable, and I enjoy working with it.",
    },
    {
      name: "Html",
      key: "html",
      text: "HTML is the foundation of my web projects and always part of my workflow.",
    },
    {
      name: "Java",
      key: "java",
      text: "I’m learning Java in my apprenticeship and use it to build backend applications.",
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
          const def = ICONS_BY_KEY[skill.key];
          if (!def) return null;

          const Icon = def.icon;
          return (
            <div className="skill-card">
              <div className="face face1">
                <div className="content">
                  <p>{skill.text}</p>
                </div>
              </div>
              <div className="face face2">
                <h2>
                  <Icon className="icon-skill" />
                  <p className="icon-skill-text">
                    {skill.name}

                  </p>
                </h2>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Skills;
