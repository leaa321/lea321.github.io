import { useLayoutEffect, useRef } from "react";
import "../style/skills.scss";
import { ICONS_BY_KEY } from "./Icon";
import "../i18n";

export interface skill {
    name: string;
    iconKey: string; 
    text: string;
}

function SkillCard({ name, text, iconKey }: skill) {
    const def = ICONS_BY_KEY[iconKey];
    const textRef = useRef(null);
    const cardRef = useRef(null);

    useLayoutEffect(() => {
        const element = textRef.current;
        const wrapper = element?.parentElement;
        if (!element || !wrapper) return;

        const MAX = 15;
        const MIN = 9;
        const STEP = 0.5;

        let fontSize = MAX;
        element.style.fontSize = `${fontSize}px`;

        while (
            fontSize > MIN &&
            (element.scrollHeight > wrapper.clientHeight ||
                element.scrollWidth > wrapper.clientWidth)
            ) {
            fontSize -= STEP;
            element.style.fontSize = `${fontSize}px`;
        }
    }, [text]);

    if (!def) return null;
    const Icon = def.icon;

    return (
        <div className="skill-card" ref={cardRef}>
            <div className="face face1">
                <div className="content">
                    <p ref={textRef}>{text}</p>
                </div>
            </div>
            <div className="face face2">
                <h2>
                    <Icon className="icon-skill" />
                    <p className="icon-skill-text">{name}</p>
                </h2>
            </div>
        </div>
    );
}

export default SkillCard;