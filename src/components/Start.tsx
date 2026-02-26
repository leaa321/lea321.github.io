import "../style/start.scss";
import AshPic from "../assets/2.webp";
import {
  IoLocationOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
} from "react-icons/io5";
import { useEffect, useRef } from "react";

function Start() {
  const handRef = useRef<HTMLSpanElement>(null);
  const locRef = useRef<HTMLAnchorElement>(null);
  const isAnimatingRef = useRef(false);
  const isHandAnimatingRef = useRef(false);

  useEffect(() => {
    handleHover();
  }, []);

  const handleHover = () => {
    const element = handRef.current;
    if (!element) return;
    if (isHandAnimatingRef.current) return;

    element.classList.add("animate");
    isHandAnimatingRef.current = true;
    setTimeout(() => {
      element.classList.remove("animate")
      isHandAnimatingRef.current = false;
    }, 1500);
  };

  const handleLocationBeginning = () => {
    const element = locRef.current;
    if (!element) return;

    element.classList.remove("shrink");

    isAnimatingRef.current = true;
    element.classList.add("grow");

    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 500);
  };

  const handleLocationEnd = () => {
    const element = locRef.current;
    if (!element) return;
    if (isAnimatingRef.current) return;

    element.classList.remove("grow");
    element.classList.add("shrink");
  };

  return (
    <div id="home" className="start-page-container">
      <div className="text-container">
        <div className="text-box-title">
          <h1 className="textContent">
            Hi I'm <span className="name">Ashley!</span>{" "}
            <span
              className="handToggle"
              ref={handRef}
              onMouseEnter={handleHover}
            >
              👋
            </span>
          </h1>
          <a
            onMouseEnter={handleLocationBeginning}
            onMouseLeave={handleLocationEnd}
            ref={locRef}
            href="https://www.google.com/maps/search/Bremen"
            className="location"
          >
            <IoLocationOutline />
            Germany, Bremen
          </a>
        </div>
        <p className="text-box">
          I'm currently doing my apprenticeship at HEC as a software Engineer. I
          really enjoy coding and trying out new stuff. Outside of career and academics, I enjoy
          playing volleyball, editing Videos, running and cooking!
        </p>
      </div>

      <div className="image-container">
        <div className="image-border"></div>
        <img src={AshPic} alt="image of ashley" className="ash-pic" />
        <div className="image-box">
          <ul className="icon-list">
            <li>
              <a href="mailto:lea.maria.drewes@gmail.com">
                <IoMailOutline className="icon" />
              </a>
            </li>
            <li>
              <a href="https://github.com/leaa321">
                <IoLogoGithub className="icon" />
              </a>
            </li>
            <li>
              <a href="https://de.linkedin.com/in/lea-drewes">
                <IoLogoLinkedin className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Start;
