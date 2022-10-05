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

  return (
    <>
    <header className='header'>
      <div className='cursorContainter'>
        <h1>Jason Horst</h1><div className='cursor'></div>
      </div>
      <div className='nav'>
        <ul className='leftList'>
          <li className='navLink' onClick={() => handleHome()}>Home</li>
          <li className='navLink' onClick={() => handleProjects()}>Projects</li>
          <li className='navLink' onClick={() => handleResume()}>Resume</li>
        </ul>
        <ul className='rightList'>
          <a className='navSocial' href='https://github.com/IntuitiveHarmony' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
          <a className='navSocial' href='https://www.linkedin.com/in/jason-horst/' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
          <a className='navSocial' href='mailto:j.horst77@gmail.com'><i class="fa-regular fa-envelope"></i></a>
        </ul>
      </div>
    </header>
      <Body home={home} projects={projects} resume={resume} links={links}/>
    {/*<Footer />*/}
    </>
  )
}

export default App
