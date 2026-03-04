import Header from "../components/Header";
import { IoArrowBackOutline as BackArrow } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import "../style/projectLayout.scss";
import { useTranslation } from "react-i18next";
import "../i18n"

export function ProjectLayout() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main className="project-content">
        <nav className="project-back" aria-label="Back to homepage">
          <Link to="/#projects" className="project-back-link">
            <BackArrow className="back-arrow" aria-hidden="true" />
            <span>{t("projectLayout.buttonText")}</span>
          </Link>
        </nav>
        <Outlet />
      </main>
      <footer>© {new Date().getFullYear()} Ashley Drewes.  {t("app.copyright")}</footer>
    </>
  );
}
