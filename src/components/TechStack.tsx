import { ICONS_BY_KEY } from "./Icon";
import "../style/techstack.scss"
import { IoCodeOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import "../i18n"

type TechStackType = {
  techKeys: string[];
};

function TechStack({ techKeys }: TechStackType) {
  const { t } = useTranslation();

  return (
    <div className="tech-stack-body">
      <h2 className="tech-stack-title">
        <IoCodeOutline className="project-card-title-icon" />
        {t("techstack.title")}
      </h2>
      <ul className="tech-stack">
        {
          techKeys.map((key) => {
            const def = ICONS_BY_KEY[key];
            if (!def) return null;

            const Icon = def.icon;
            const IconColor = def.color;
            return (
              <li key={def.key} className="tech-item" title={def.label} aria-label={def.label}>
                <Icon className="tech-icon" style={{ color: IconColor }} />
                <span className="tech-label">{def.label}</span>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default TechStack;