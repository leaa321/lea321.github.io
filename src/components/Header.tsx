import { Link } from "react-router-dom";
import "../style/header.scss";
import ThemeSwitch from "./ThemeSwitch";
import { LanguageSwitch } from "./LanguageSwitch";

function Header() {

  return (
    <header>
      <Link className="name-header" to="/" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>
        ASHLEY
      </Link>
      <LanguageSwitch />
      <ThemeSwitch />
    </header>
  );
}

export default Header;
