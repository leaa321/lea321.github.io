import "../style/projects.css";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../assets/querformatladen.png";

function Projects() {
  const projects = [
    {
      name: "Project 1",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "",
      imageLink: logo,
    },
    {
      name: "Project 2",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "",
      imageLink: logo,
    }];

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
            <button onClick={() => window.open(project.link, "_blank")}>
              View Project <IoIosArrowForward/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
