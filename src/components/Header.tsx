import '../style/header.css'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

type HeaderProps = {
  onToggleTheme: () => void
  theme: "light" | "dark"
}

function Header({ onToggleTheme, theme }: HeaderProps){
return(
<header>
          <a className="name-header" href="#home">ASHLEY</a>
          <button className="icon darkmode" id="toggleMode" onClick={onToggleTheme}>
          {theme === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
        </button>
        </header>

    )
}

export default Header