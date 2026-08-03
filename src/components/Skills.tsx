import { useEffect } from "react";
import "../style/skills.scss";
import { useTranslation } from "react-i18next";
import "../i18n";
import SkillCard, { type skill } from "./SkillCard.tsx";

function Skills() {
    const { t } = useTranslation();

    const skills: skill[] = [
        { name: "Angular", iconKey: "angular", text: t("skills.text.angular") },
        { name: "React", iconKey: "react", text: t("skills.text.react") },
        { name: "Sass", iconKey: "scss", text: t("skills.text.sass") },
        { name: "Html", iconKey: "html", text: t("skills.text.html") },
        { name: "Java", iconKey: "java", text: t("skills.text.java") },
        { name: "Flutter", iconKey: "flutter", text: t("skills.text.flutter") }
    ];

    useEffect(() => {
        const icons = document.querySelectorAll(".skill-card");
        if (icons.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.6 }
        );

        icons.forEach((icon) => observer.observe(icon));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="skill-section">
            <h1>{t("skills.title")}</h1>
            <div className="skill-container">
                {skills.map((skill) => (
                    <SkillCard
                        key={skill.iconKey}
                        name={skill.name}
                        iconKey={skill.iconKey}
                        text={skill.text}
                    />
                ))}
            </div>
        </div>
    );
}

export default Skills;