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

        <div className='projectContainer'>
          <h2>Projects</h2>
          <div className='projectDeck'>
            <div className='projectCard'>
              <h3>Kingfisher Tie Dye</h3>
              <a href='http://kingfishertiedye.com/' target="_blank" rel="noopener noreferrer"><img className='projectImage' src={process.env.PUBLIC_URL + '/Kingfisher.png'} alt="KingfisherTieDye.com Thumbnail" /></a>
              <ul>
                <li className='projectBullet'>Full stack CRUD app that allows this business to showcase their work and connect with their customers</li>
                <li className='projectBullet'>Built using Express, AtlasDB, jQuery, HTML5, CSS3, JavaScript, Heroku</li>
              </ul>
            </div>
            <div className='projectCard'>
              <h3>Tile-r</h3>
              <a href='https://intuitiveharmony.github.io/tile-r/' target="_blank" rel="noopener noreferrer"><img className='projectImage' src={process.env.PUBLIC_URL + '/Tile-r.png'} alt="Tile-r Thumbnail" /></a>
              <ul>
                <li className='projectBullet'>React app that allows user to tile and scale images from the web</li>
                <li className='projectBullet'>I built this app to easily tile images that I was producing using the Midjourney bot</li>
                <details>
                  <summary>Sample Images (Paste url into Tile-r)</summary>
                    <li className='projectBullet'>https://mj-gallery.com/6e3777c3-7a96-43cb-885b-a841a7eab4ca/grid_0.png</li>
                    <li className='projectBullet'>https://mj-gallery.com/64b8ab76-5703-4b0a-9130-8e5bf5f8a1fe/grid_0.png</li>
                    <li className='projectBullet'>https://mj-gallery.com/52db2954-b7b0-43c6-bf58-f4ba92855f34/grid_0.png</li>
                </details>
              </ul>
            </div>
            <div className='projectCard'>
              <h3>PolyBeast</h3>
              <a href='https://intuitiveharmony.github.io/breeze_front/' target="_blank" rel="noopener noreferrer"><img className='projectImage' src={process.env.PUBLIC_URL + '/Polybeast.png'} alt="Polybeast Thumbnail" /></a>
              <ul>
                <li className='projectBullet'>Full stack CRUD app that allows the user to make musical sequences of varying complexity, save their creation and edit it later</li>
                <li className='projectBullet'>Collaborated with <a className='pinkLink' href='https://github.com/ampersand22' target="_blank" rel="noopener noreferrer">Jey Ulmer</a> to build this project</li>
                <li className='projectBullet'>Built using Django, Python, React, Redux, Tone.js, Reactronica, HTML5, CSS3, JavaScript, Heroku</li>
              </ul>
            </div>
          </div>
        </div>


      </>
    : <></>}

    {props.resume  ?
      <div className='projectContainer'>
        <h2>Resume</h2>
        <p>Click on Resume to Download</p>
        <a href="/Jason-Horst-Resume-2022.pdf" download><img className='resumeImage' src={process.env.PUBLIC_URL + '/resumeImg.png'} alt="Resume Thumbnail" /></a>
      </div>
    : <></>}


    </>
  );
}

export default Body;