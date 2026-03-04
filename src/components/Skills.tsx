import { useEffect } from "react";
import "../style/skills.scss";
import { ICONS_BY_KEY } from "./Icon";
import { useTranslation } from "react-i18next";
import "../i18n"

function Skills() {
  const { t } = useTranslation();

  const skills = [
    {
      name: "Angular",
      key: "angular",
      text: t("skills.text.angular"),
    },
    {
      name: "React",
      key: "react",
      text: t("skills.text.react"),
    },
    {
      name: "Sass",
      key: "scss",
      text: t("skills.text.sass"),
    },
    {
      name: "Html",
      key: "html",
      text: t("skills.text.html"),
    },
    {
      name: "Java",
      key: "java",
      text: t("skills.text.java"),
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
      <h1>{t("skills.title")}</h1>
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
