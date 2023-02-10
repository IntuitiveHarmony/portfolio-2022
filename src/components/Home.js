
const Home = () => {

  return (
    <div className='contentContainer'>
      <div className='aboutContainer'>
        <h2>About me</h2>
        <p>If I'm not taking something apart to understand how it works, I'm fixing something that I broke while taking it apart to understand how it worked. Curiosity, knowledge, growth and improvement are all motivators for me to keep expanding upon my various disciplines of study. I continually draw upon my varied experiences from the music, management, HVAC, plumbing, culinary and coding worlds. I combine them with my explorations of philosophy and logic in order to enrich my life and the lives of others.</p>

        <p>Currently, my primary focus is on computer programming with the ultimate goal of creating software-based musical instruments that are accessible to individuals of all skill levels, including those who are new to music as well as experienced musicians. I am motivated to develop these tools in order to provide a intuitive and creative platform for people to explore and express their musical abilities.</p>
      </div>
      <div className='imgContainer'>
        <img className='bioImage' src={process.env.PUBLIC_URL + '/IMG_07792.png'} alt="Jason" />
      </div>

    </div>
  )
}

export default Home
