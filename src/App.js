import { useState } from 'react'
import Body from './components/Body'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  const [home, setHome] = useState(true)
  const [projects, setProjects] = useState(false)
  const [resume, setResume] = useState(false)
  const [links, setLinks] = useState(false)

  const handleHome = () => {
    setHome(true)
    setProjects(false)
    setResume(false)
    setLinks(false)
  }
  const handleProjects = () => {
    setHome(false)
    setProjects(true)
    setResume(false)
    setLinks(false)
  }
  const handleResume = () => {
    setHome(false)
    setProjects(false)
    setResume(true)
    setLinks(false)
  }
  const handleLinks = () => {
    setHome(false)
    setProjects(false)
    setResume(false)
    setLinks(true)
  }
  return (
    <>
    <header>
      <h1>Jason Horst</h1>
      <nav>
        <ul>
          <li onClick={() => handleHome()}>Home</li>
          <li onClick={() => handleProjects()}>Projects</li>
          <li onClick={() => handleResume()}>Resume</li>
          <li onClick={() => handleLinks()}>Links</li>
        </ul>
        <ul>
          <li>Github</li>
          <li>LinkedIn</li>
        </ul>
      </nav>
    </header>
      <Body />
      <Footer />
    </>
  )
}

export default App
