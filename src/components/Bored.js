import axios from 'axios'
import {useState, useEffect} from 'react'

const Bored = () => {
  const [bored, setBored] = useState()
  const [type, setType] = useState()
  const [price, setPrice] = useState()

  const handleBored = () => {
    axios
        .get('https://www.boredapi.com/api/activity')
        .then((response)=>{
            setBored(response.data)

        })
  }



  // useEffect(()=>{
  //     axios
  //         .get('https://www.boredapi.com/api/activity')
  //         .then((response)=>{
  //             setBored(response.data)
  //
  //         })
  // },[])
  return (
    <>
      <h3>I'm Bored <a href='https://github.com/IntuitiveHarmony/portfolio-2022/blob/main/src/components/RGBSlider.js' target="_blank" rel="noopener noreferrer"><i className="soc fa-brands fa-github pinkLink gitLink"></i></a></h3>
      <p>Feeling uninspired? <br/> Make a few optional selections and a random activity will be generated. <br/><br/> Powered by the <a href='https://www.boredapi.com/' target="_blank" rel="noopener noreferrer" className='pinkLink'>Bored Api</a></p>
      <h1 onClick={() => handleBored()} >I'm Bored!</h1>
    </>
  )
}

export default Bored
