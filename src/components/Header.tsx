import { Link } from "react-router-dom";
import "../style/header.scss";
import ThemeSwitch from "./ThemeSwitch";

function Header() {
 
  return (
    <header>
      <Link className="name-header" to="/" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>
        ASHLEY
      </Link>
      <ThemeSwitch/>
    </header>
  );
}

export default Header;
