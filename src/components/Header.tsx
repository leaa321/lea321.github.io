import '../style/header.css'

type HeaderProps = {
  onToggleTheme: () => void
}

function Header({ onToggleTheme }: HeaderProps){
return(
<header>
          <a className="name-header" href="#home">ASHLEY</a>
          <button className="material-symbols-outlined darkmode" id="toggleMode" onClick={onToggleTheme}>
          rainy
        </button>
        
        </header>

    )
}

export default Header