import { useTranslation } from "react-i18next";
import { IoArrowForward, IoBodyOutline, IoFilter, IoHandLeftOutline, IoImageOutline, IoPeopleOutline, IoRefresh, IoSchoolOutline } from "react-icons/io5";
import { WorkProjectsPageCard, type ProjectCardProps } from "./WorkProjectsPageCard";
import { IoIosCloudyNight, IoIosInformationCircleOutline } from "react-icons/io";
import createEditCourse from "../../assets/projects/kurs/createEdit.png"
import filterCourse from "../../assets/projects/kurs/filter.png"
import salonOverview from "../../assets/projects/salon/overview.png"
import salonOverviewTwo from "../../assets/projects/salon/overviewTwo.png"

export function WorkProjectsPage() {
    const { t } = useTranslation();
    const workProjects: ProjectCardProps[] = [
        {
            id: "salon",
            title: t("workProjects.salon.title"),
            titleIcon: IoHandLeftOutline,
            description: t("workProjects.salon.description"),
            images:
                [
                    {
                        src: salonOverview,
                        alt: "overview of salon website",
                    },
                    {
                        src: salonOverviewTwo,
                        alt: "overview of salon website",
                    },
                ],
            whatItIs: t("workProjects.salon.whatItIs"),
            whatItFeatures:
                [
                    {
                        text: t("workProjects.salon.features.one"),
                        icon: IoPeopleOutline,
                    },
                    {
                        text: t("workProjects.salon.features.two"),
                        icon: IoImageOutline,
                    },
                    {
                        text: t("workProjects.salon.features.three"),
                        icon: IoIosCloudyNight,
                    },
                    {
                        text: t("workProjects.salon.features.four"),
                        icon: IoBodyOutline,
                    },
                ],
            techKeys:
                [
                    "scss",
                    "html",
                ],
        },
        {
            id: "course",
            title: t("workProjects.course.title"),
            titleIcon: IoPeopleOutline,
            description: t("workProjects.course.description"),
            images:
                [
                    {
                        src: createEditCourse,
                        alt: "overview of editing and creating courses",
                    },
                    {
                        src: filterCourse,
                        alt: "overview of sorting courses",
                    },
                ],
            whatItIs: t("workProjects.course.whatItIs"),
            whatItFeatures:
                [
                    {
                        text: t("workProjects.course.features.one"),
                        icon: IoFilter,
                    },
                    {
                        text: t("workProjects.course.features.two"),
                        icon: IoRefresh,
                    },
                    {
                        text: t("workProjects.course.features.three"),
                        icon: IoIosCloudyNight,
                    },
                    {
                        text: t("workProjects.course.features.four"),
                        icon: IoIosInformationCircleOutline,
                    },
                ],
            techKeys:
                [
                    "scss",
                    "springboot",
                    "angular",
                ],
        },
    ]
    return (
        <div className="project-page"
            id="work-projects-top"
        >
            <div className="title-section">
                <h2 className="project-title">
                    <IoSchoolOutline className="project-title-icon" />
                    {t("workProjectsPage.title")}
                </h2>
                <p className="description">
                    {t("workProjectsPage.description")}
                </p>
            </div>

            <div className="project-navigation-container">
                <nav className="project-navigation">
                    <h4 className="navigate-title">
                        {t("workProjectsPage.navigate")}
                    </h4>
                    {workProjects.map((project) => (
                        <a
                            key={project.id}
                            href={`#${project.id}`}
                            className="project-navigation-link"
                        >
                            {project.title}
                            <IoArrowForward className="arrow-icon" />

                        </a>
                    ))}
                </nav>
            </div>

            <div className="work-project-list">
                {workProjects.map((project) => (
                    <WorkProjectsPageCard
                        key={project.id}
                        {...project}
                    />
                ))}
            </div>
        </div>
    )
}

export default WorkProjectsPage;

// fix scroll
//  dailyfit
// karteikarten anwendung
// unter links fuer bestimmte projekte
// responsive