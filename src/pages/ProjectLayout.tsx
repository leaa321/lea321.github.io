import Header from "../components/Header";
import { IoArrowBackOutline as BackArrow } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import "../style/projectLayout.scss";

export function ProjectLayout() {
  return (
    <>
      <Header />
      <main className="project-content">
        <nav className="project-back" aria-label="Back to homepage">
          <Link to="/#projects" className="project-back-link">
            <BackArrow className="back-arrow" aria-hidden="true" />
            <span>Back to portfolio</span>
          </Link>
        </nav>
        <Outlet />
      </main>
      <footer>© 2026 Ashley Drewes. All rights reserved.</footer>
    </>
  );
}
