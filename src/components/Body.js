import Home from './Home'
import Projects from './Projects'
import Games from './Games'

const Body = (props) => {

  return (
    <>
    {props.home  ?
      <Home />
    : <></>}

    {props.projects  ?
      <Projects />
    : <></>}

    {props.games  ?
      <Games />
    : <></>}


    </>
  );
}

export default Body;
