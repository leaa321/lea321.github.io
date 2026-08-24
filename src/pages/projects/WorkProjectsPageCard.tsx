import type { IconType } from "react-icons";
import { IoArrowUpOutline } from "react-icons/io5";
import TechStack from "../../components/TechStack";
import { useTranslation } from "react-i18next";

type ProjectFeature = {
    text: string;
    icon: IconType;
};

type ProjectImage = {
    src: string;
    alt: string;
};

export type ProjectCardProps = {
    id: string;

    title: string;
    titleIcon: IconType;

    description: string;
    images: ProjectImage[];

    whatItIs: string;
    whatItFeatures: ProjectFeature[];

    techKeys: string[];
};

export function WorkProjectsPageCard({
    id,
    title,
    titleIcon: TitleIcon,
    description,
    images,
    whatItIs,
    whatItFeatures,
    techKeys,
}: ProjectCardProps) {
    const { t } = useTranslation();

    return (
        <section
            id={id}
            className="project-page-card work-project-card"
        >
            <a
                className="back-to-top"
                aria-label="Back to top"
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
            >
                <IoArrowUpOutline />
            </a>

            <div className="title-section">
                <h2 className="project-title">
                    <TitleIcon className="project-title-icon" />
                    {title}
                </h2>

                <p className="description">
                    {description}
                </p>
            </div>

            <div className="project-image-section">
                {images.map((image) => (
                    <img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="project-image-item double"
                    />
                ))}
            </div>

            <div className="project-page-box">
                <h2 className="project-card-title">
                    {t("workProjects.whatItIs")}

                </h2>

                <p className="project-card-description">
                    {whatItIs}
                </p>
            </div>

            <div>
                <h2 className="project-card-title">
                    {t("workProjects.whatItDoes")}
                </h2>

                <ul className="feature-list">
                    {whatItFeatures.map((feature) => {
                        const FeatureIcon = feature.icon;

                        return (
                            <li
                                key={feature.text}
                                className="feature-item"
                            >
                                <FeatureIcon className="feature-icon" />

                                <span className="feature-item-text">
                                    {feature.text}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="project-card-tech">
                <TechStack techKeys={techKeys} />
            </div>
        </section>
    );
}