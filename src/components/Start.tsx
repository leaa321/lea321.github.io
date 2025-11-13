import '../style/start.css'

function Start(){

    return(
<div className="start-section">
      <div className="start-page-container">
      <div className="text-container">
        <div className="text-box-title">
          <h1 className="textContent">
            Hi I'm Ashley! <span className="handToggle">👋</span>
          </h1>
          <a href="https://www.google.com/maps/search/Bremen" className="location">
          {/* <ion-icon name="location-outline"></ion-icon> */} Germany, Bremen
          </a>
        </div>
        <p className="text-box">
          Im currently doing my apprenticeship at HEC as a software Engineer.
            I have a passion for coding. Outside of career and academics, I
            enjoy playing volleyball, editing Video, running and cooking!
        </p>
      </div>
    <div className="image-container">
      <div className="image-border"></div>
      <img src="./assets/react.svg" alt="image of ashley" className="ash-pic" />
      <div className="image-box">
        <p className="paragprah">Contact</p>
        <ul className="icon-list">
          <li>
            <a href="mailto:lea.maria.drewes@gmail.com">
              {/* email icon */}
            </a>
          </li>
          <li>
            <a href="https://github.com/leaa321">
            {/* github icon */}
            </a>
          </li>
          <li><a href="https://de.linkedin.com/in/lea-drewes">
          {/* linkedin icon */}
          </a></li>
        </ul>
      </div>
    </div>
    </div>
        </div>   

    )
}


export default Start