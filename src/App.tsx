import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="start-section">

        <header>
          <a className="name-header" href="#home">ASHLEY</a>
          <button className="material-symbols-outlined darkmode" id="toggleMode">
          rainy
        </button>
        </header>

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
      <img src="./bilder/Image.png" alt="image of ashley" className="ash-pic" />
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

  <div className="education-section">
    <h1>Education</h1>
    <div className="timeline">
      <div className="outer">
        <div className="card">
          <div className="info">
            <h3 className="title">2025</h3>
            <p>started my apprenticeship at HEC</p>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <h3 className="title">2024</h3>
            <p>studied for one year at the university of public administration and did my police studies there</p>
    
          </div>
        </div>
        <div className="card">
          <div className="info">
            <h3 className="title">2024</h3>
            <p>finised my A-Levels at Gymnaisium Syke</p>
          </div>
        </div>
      </div>
    </div>
    </div>      
        
        <div className="skill-section">
          <h1>Skills</h1>
          <div className="skill-container">
            <ul className="skill-list">
              <li></li>
              <li></li>
              <li></li>

            </ul>
          </div>
        </div>

        <div className="project-section">
          <h1>Projects</h1>
          <p>Still in progress...</p>
        </div>

<footer>© 2025 Ashley Drewes. All rights reserved.</footer>        

<script
      type="module"
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
    ></script>
         </>
  )
}

export default App
