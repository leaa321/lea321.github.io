import {useTranslation} from "react-i18next";


export function WorkProjectsPage() {
    const techKeys: string[] = ["scss", "springboot", "angular"] as const;
    const { t } = useTranslation();

    return (
        <div className="project-page">
            <div className="title-section">
                <h2 className="project-title">
                    {t("workProjectsPage.start.title")}
                </h2>
                <p className="description">
                    {t("workProjectsPage.start.description")}
                </p>
            </div>


        </div>
    )
}

export default WorkProjectsPage;