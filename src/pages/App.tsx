import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Start from '../components/Start'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

function App() {
const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
    <Header onToggleTheme={toggleTheme}/>
    <Start/>
    <Education/>
    <Skills/>
    <Projects/>
<footer>© 2025 Ashley Drewes. All rights reserved.</footer>        
         </>
  )

}

export default App
//TODO: adding of js function
//TODO: for each component different tsx and css, Header, Start, Education, Skills, projects, footer
//TODO: filter out component that are used multiple times
