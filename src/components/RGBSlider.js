import { useState } from 'react'

const RGBSlider = () => {
  const [r, setR] = useState(0)
  const [g, setG] = useState(0)
  const [b, setB] = useState(0)


  const handle_R = (e) => {
    setR(e.target.value)
  }
  const handle_G = (e) => {
    setG(e.target.value)
  }
  const handle_B = (e) => {
    setB(e.target.value)
  }


  return (
    <>
      <h2>RGB Color Sliders</h2>
      <h3>rgb({r}, {g}, {b})</h3>
      <div className='RGBView'
            style={{
              backgroundColor: `rgb(${r}, ${g}, ${b})`,
            }}></div>
      <div className='sliderContainer'>
        <div className='sliderBox'>
          <p className='sliderLabel'>Red</p>
          <input  className='slider'
                  style={{
                    backgroundImage: `linear-gradient(to right, rgb( 0, ${g}, ${b}) , rgb( 255, ${g}, ${b}))`,
                    /*backgroundColor: `rgb( 255, ${g}, ${b})`,*/
                  }}
                  type='range' min='0' max='255' onChange={handle_R}
          />
        </div>
        <div className='sliderBox'>
          <p className='sliderLabel'>Green</p>
          <input  className='slider'
                  style={{
                    backgroundImage: `linear-gradient(to right, rgb( ${r}, 0, ${b}) , rgb( ${r}, 255, ${b}))`,
                  }}
                  type='range' min='0' max='255' onChange={handle_G}
          />
        </div>
        <div className='sliderBox'>
          <p className='sliderLabel'>Blue</p>
          <input  className='slider'
                  style={{
                    backgroundImage: `linear-gradient(to right, rgb( ${r}, ${g}, 0) , rgb( ${r}, ${g}, 255))`,
                  }}
                  type='range' min='0' max='255' onChange={handle_B}
          />
        </div>
      </div>
    </>
  )


}


export default RGBSlider
