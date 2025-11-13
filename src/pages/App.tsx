import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Start from '../components/Start'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Start/>
    <Education/>
    <Skills/>
    <Projects/>
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
//TODO: adding of js function
//TODO: for each component different tsx and css, Header, Start, Education, Skills, projects, footer
//TODO: filter out component that are used multiple times
