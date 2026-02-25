import { ICONS_BY_KEY } from "./Icon";
import "../style/techstack.scss"
import { IoCodeOutline } from "react-icons/io5";

type TechStackType = {
  techKeys: string[];
};

function TechStack({techKeys}: TechStackType){
    return(
      <div className="tech-stack-body">
      <h2 className="tech-stack-title">
            <IoCodeOutline className="project-card-title-icon"/>
          Tech stack
        </h2>
      <ul className="tech-stack">
          {
            techKeys.map((key) => {
              const def = ICONS_BY_KEY[key];
              if (!def) return null;
      
              const Icon = def.icon;
              return (
                <li key={def.key} className="tech-item" title={def.label} aria-label={def.label}>
                  <Icon className="tech-icon"/>
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