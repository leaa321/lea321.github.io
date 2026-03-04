import "../style/projects.scss";
import { IoIosArrowForward } from "react-icons/io";
import partyGame from "../assets/projects/party-landingpage-short.png";
import ourHome from "../assets/projects/ourhomelogo.png";
import { Link } from "react-router-dom";
import { ICONS_BY_KEY } from "./Icon";
import { useTranslation } from "react-i18next";
import "../i18n"

function Projects() {
  const { t } = useTranslation();
  const projects = [
    {
      name: "Party app",
      description:
        t("projects.description.partyApp"),
      link: "/projects/partyApp",
      imageLink: partyGame,
      tags: ["react", "scss", "nodejs"],
    },
    {
      name: "Househould app",
      description: t("projects.description.ourHome"),
      link: "/projects/ourHome",
      imageLink: ourHome,
      tags: ["angular", "scss", "springboot", "firebase"],
    },
  ];

  return (
    <div className="project-section">
      <h1> {t("projects.title")}</h1>
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
                  const iconColor = def.color ?? "#ffff";
                  const iconLabel = def.label;
                  return (
                    <div
                      className="tag"
                      style={{
                        color: iconColor,
                        border: "1px solid" + iconColor,
                      }}
                    >
                      {iconLabel}{" "}
                    </div>
                  );
                })}
              </div>
              <Link className="button" to={project.link}>
                {t("projects.button")} <IoIosArrowForward className="arrow-forward" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
