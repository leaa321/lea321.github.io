import { useEffect } from "react";
import "../style/skills.css";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";

function Skills() {
  const skills = [
    {
      name: "Java",
      icon: <IoLogoJavascript className="icon-skill" />,
    },
    {
      name: "CSS",
      icon: <IoLogoCss3 className="icon-skill" />,
    },
    {
      name: "React",
      icon: <IoLogoReact className="icon-skill" />,
    },
    {
      name: "HTML",
      icon: <IoLogoHtml5 className="icon-skill" />,
    },
  ];

  useEffect(() => {
    const icons = document.querySelectorAll(".icon-skill");
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
        <ul className="skill-list">
          {skills.map((skill) => (
            <li key={skill.name} id={`skill-${skill.name}`}>
              {skill.icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
