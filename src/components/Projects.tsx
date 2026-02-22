import "../style/projects.css";
import { IoIosArrowForward, IoLogoAngular } from "react-icons/io";
import logo from "../assets/querformatladen.png";
import { IoLogoHtml5, IoLogoReact, IoLogoSass } from "react-icons/io5";
import { FaJava } from "react-icons/fa";

function Projects() {
  const tags = [
    {
      name: "Angular",
      icon: <IoLogoAngular className="tag" />,
    },
    {
      name: "React",
      icon: <IoLogoReact className="tag" />,
    },
    {
      name: "SCSS",
      icon: <IoLogoSass className="tag" />,
    },
    {
      name: "HTML",
      icon: <IoLogoHtml5 className="tag" />,
    },
    {
      name: "Java",
      icon: <FaJava className="tag" />,
    },
  ];

  const projects = [
    {
      name: "Project 1",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/projects/partyApp",
      imageLink: logo,
      tags: [tags[0].name, tags[2].name],
    },
    {
      name: "Project 2",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "",
      imageLink: logo,
      tags: [tags[0].name, tags[2].name],
    },
  ];

  return (
    <div className="project-section">
      <h1>Projects</h1>
      <div className="card-container">
        {projects.map((project) => (
          <div className="project-card">
            <div className="project-text-section">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
            <img src={project.imageLink} alt={project.name} />
            <div className="bottom-section">
              <div className="tag-section">
                {project.tags.map((tag) => (
                  <div>{tags.find((t) => t.name === tag)?.icon}</div>
                ))}
              </div>
              <a className="button" href={project.link}>
                View Project <IoIosArrowForward />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
