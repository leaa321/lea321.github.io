import '../style/start.css'
import AshPic from "../assets/Image.png";
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import { useRef } from 'react';

function Start(){
  const handRef = useRef<HTMLSpanElement>(null);
  const locRef = useRef<HTMLAnchorElement>(null);
  const isAnimatingRef = useRef(false);

const handleHover = () => {
    const element = handRef.current;
    if(!element) return;

    element.classList.add("animate");

      setTimeout(()=> element.classList.remove("animate"),1500);  
  }

  const handleLocationBeginning = () => {
    const element = locRef.current;
    if(!element) return;

    element.classList.remove("shrink");

    isAnimatingRef.current = true;
    element.classList.add("grow");

  setTimeout(() => {
    isAnimatingRef.current = false;
  }, 500);

  }

const handleLocationEnd = () => {
    const element = locRef.current;
    if(!element) return;
    if (isAnimatingRef.current) return;

    element.classList.remove("grow");
    element.classList.add("shrink");
}

    return(
      <div className="start-page-container">
      <div className="text-container">
        <div className="text-box-title">
          <h1 className="textContent">
            Hi I'm Ashley! <span className="handToggle" ref={handRef} onMouseEnter={handleHover}>👋</span>
          </h1>
          <a onMouseEnter={handleLocationBeginning} onMouseLeave={handleLocationEnd} ref={locRef} href="https://www.google.com/maps/search/Bremen" className="location">
        <IoLocationOutline/>Germany, Bremen
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
      <img src={AshPic} alt="image of ashley" className="ash-pic" />
      <div className="image-box">
        <p className="paragraph">Contact</p>
        <ul className="icon-list">
          <li>
            <a href="mailto:lea.maria.drewes@gmail.com">
              <IoMailOutline className="icon"/>
            </a>
          </li>
          <li>
            <a href="https://github.com/leaa321">
            {/* github icon */}
              <IoMailOutline className="icon"/>
            </a>
          </li>
          <li><a href="https://de.linkedin.com/in/lea-drewes">
          {/* linkedin icon */}
              <IoMailOutline className="icon"/>
          </a></li>
        </ul>
      </div>
    </div>
    </div>

    )
}


export default Start