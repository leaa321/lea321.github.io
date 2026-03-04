import Header from "../components/Header";
import Start from "../components/Start";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { useTranslation } from "react-i18next";
import "../i18n"

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Start />
      <Education />
      <Skills />
      <Projects />

      <footer>{t("app.copyright")}</footer>
    </>
  );
}

export default App;

// new Date().getFullYear +