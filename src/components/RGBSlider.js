import { useState } from 'react'

const RGBSlider = () => {
  const [r, setR] = useState(0)
  const [g, setG] = useState(0)
  const [b, setB] = useState(0)
  const [a, setA] = useState(1)


  const handle_R = (e) => {
    setR(e.target.value)
  }
  const handle_G = (e) => {
    setG(e.target.value)
  }
  const handle_B = (e) => {
    setB(e.target.value)
  }
  const handle_A = (e) => {
    setA(e.target.value)
  }

  return (
    <>
      <h3 id="RGBSliders">RGB Color Sliders <a href='https://github.com/IntuitiveHarmony/portfolio-2022/blob/main/src/components/RGBSlider.js' target="_blank" rel="noopener noreferrer"><i className="soc fa-brands fa-github pinkLink gitLink"></i></a></h3>

      <div className='RGBView'
            style={{
              backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`,
      }}>
        <div className='RGBViewBack'>
        </div>
      </div>
            <h3>rgba( {r}, {g}, {b}, {a})</h3>
      <div className='sliderContainer'>
        <div className='sliderBox'>
          <p className='sliderLabel'>Red</p>
          <input  className='slider'
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba( 0, ${g}, ${b}) , rgb( 255, ${g}, ${b}))`,
                  }}
                  type='range'
                  min='0'
                  max='255'
                  onChange={handle_R}
          />
        </div>
        <div className='sliderBox'>
          <p className='sliderLabel'>Green</p>
          <input  className='slider'
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba( ${r}, 0, ${b}) , rgb( ${r}, 255, ${b}))`,
                  }}
                  type='range' min='0' max='255' onChange={handle_G}
          />
        </div>
        <div className='sliderBox'>
          <p className='sliderLabel'>Blue</p>
          <input  className='slider'
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba( ${r}, ${g}, 0) , rgb( ${r}, ${g}, 255))`,
                  }}
                  type='range' min='0' max='255' onChange={handle_B}
          />
        </div>
        <div className='sliderBox'>
          <p className='sliderLabel'>Opacity</p>
          <input  className='slider'
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba( ${r}, ${g}, ${b}, 0) , rgb( ${r}, ${g}, ${b}, 1))`,
                  }}
                  type='range' step='.1' min='0' max='1' onChange={handle_A}
          />
        </div>
      </div>
    </>
  )


}


export default RGBSlider
