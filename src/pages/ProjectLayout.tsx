import { useEffect, useState } from "react";
import Header from "../components/Header";
import { IoArrowBackOutline as BackArrow } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import "../style/projectLayout.css";

export function ProjectLayout() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Header onToggleTheme={toggleTheme} theme={theme} />

      <main className="project-content">
        <nav className="project-back" aria-label="Back to homepage">
          <a href="/" className="project-back-link">
            <BackArrow aria-hidden="true" />
            <span>Back to portfolio</span>
          </a>
        </nav>

        <Outlet />
      </main>

      <footer>© 2026 Ashley Drewes. All rights reserved.</footer>
    </>
  );
}
