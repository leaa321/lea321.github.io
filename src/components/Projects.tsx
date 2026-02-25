import "../style/projects.scss";
import { IoIosArrowForward } from "react-icons/io";
import partyGame from "../assets/projects/party-landingpage-short.png"
import ourHome from "../assets/projects/ourhome-rewardpageShort.png";
import { Link } from "react-router-dom";
import { ICONS_BY_KEY } from "./Icon";

function Projects() {
  const projects = [
    {
      name: "Party app",
      description:
        "A custom party app we built for my fathers 49th birthday.",
      link: "/projects/partyApp",
      imageLink: partyGame,
      tags: ["react", "scss", "nodejs"],
    },
    {
      name: "Househould app",
      description:
        "I’m currently working on an Angular app where two partners manage shared tasks and individually earn points to unlock their own rewards.",
      link: "/projects/ourHome",
      imageLink: ourHome,
      tags: ["angular", "scss", "springboot", "firebase"],
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
            <div className="project-card-media">
              <img src={project.imageLink} alt={project.name} />
            </div>
            <div className="bottom-section">
              <div className="tag-section">
                {project.tags.map((tag) => {
                  const def = ICONS_BY_KEY[tag];
                  if (!def) return null;

                  const Icon = def.icon;
                  return (
                    <Icon className="tag" />
                  )
                })}

              </div>
              <Link className="button" to={project.link}>
                View Project <IoIosArrowForward className="arrow-forward" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
