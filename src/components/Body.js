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

        <div className='columnContainer'>
          <h2>Projects</h2>
          <div className='projectContainer'>
            <h3>Kingfisher Tie Dye</h3>
            <img className='projectImage' src={process.env.PUBLIC_URL + '/Kingfisher.png'} alt="KingfisherTieDye.com Thumbnail" />
            <ul>
              <li className='projectBullet'>Full stack CRUD app that allows this small business to showcase their work and connect with their customer base</li>
              <li className='projectBullet'>Built using Express, AtlasDB, jQuery, HTML5, CSS3, JavaScript, Heroku</li>
            </ul>
          </div>
        </div>


      </>
    : <></>}

    {props.resume  ?
      <div>
        <p>Resume</p>
      </div>
    : <></>}


    </>
  );
}

export default Body;
