import { useState } from 'react'
import Body from './components/Body'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  const [home, setHome] = useState(true)
  const [projects, setProjects] = useState(false)
  const [games, setGames] = useState(false)
  const [links, setLinks] = useState(false)

  const handleHome = () => {
    setHome(true)
    setProjects(false)
    setGames(false)
    setLinks(false)
  }
  const handleProjects = () => {
    setHome(false)
    setProjects(true)
    setGames(false)
    setLinks(false)
  }
  const handleGames = () => {
    setHome(false)
    setProjects(false)
    setGames(true)
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
            <li className='navLink' onClick={() => handleGames()}>Games</li>
          </ul>
          <ul className='rightList'>
            <a className='navSocial' href='https://github.com/IntuitiveHarmony' target="_blank" rel="noopener noreferrer"><i className="soc fa-brands fa-github"></i></a>
            <a className='navSocial' href='https://www.linkedin.com/in/jason-horst/' target="_blank" rel="noopener noreferrer"><i className="soc fa-brands fa-linkedin"></i></a>
            <a className='navSocial' href='mailto:j.horst77@gmail.com'><i className="soc fa-regular fa-envelope"></i></a>
          </ul>
        </div>
      </header>
      <Body home={home} projects={projects} games={games}/>
    {/*<Footer />*/}
    </>
  )
}

export default App
