import { useState } from 'react'


const Body = (props) => {

  return (
    <>
    {props.home  ?
      <div className='contentContainer'>
        <div className='aboutContainer'>
          <h2>About me</h2>
          <p>If I’m not taking something apart to understand how it works, I’m fixing something that I broke while taking it apart to understand how it worked. Curiosity, knowledge, growth and improvement are all motivators for me to keep expanding upon my various disciplines of study. I continually draw upon my varied experiences from the music, management, HVAC, plumbing, culinary and coding worlds. I combine them with my explorations of philosophy and logic in order to enrich my life and the lives of others.</p>
        </div>
        <div className='imgContainer'>
          <img className='bioImage' src={process.env.PUBLIC_URL + '/IMG_0779.jpeg'} alt="Jason" />
        </div>
      </div>
    : <></>}

    {props.projects  ?
      <>
        <div className='contentContainer'>
          <h2>Projects</h2>
          <h3>Rock, Paper, Scissor</h3>
          <p>This was probably the first games I built using code. It may be simple, but I wanted to include it here to pay homage to my humble beginings </p>
        </div>
        <div className='contentContainer'>
          <h2>Projects</h2>
          <h3>Rock, Paper, Scissor</h3>
          <p>This was probably the first games I built using code. It may be simple, but I wanted to include it here to pay homage to my humble beginings </p>
        </div>

      </>
    : <></>}

    {props.resume  ?
      <div>
        <p>Resume</p>
      </div>
    : <></>}

    {props.links  ?
      <div className='contentContainer'>
        <p>links</p>
      </div>
    : <></>}

    </>
  );
}

export default Body;
