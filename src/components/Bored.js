import axios from 'axios'
import {useState, useEffect} from 'react'

const Bored = () => {
  const [bored, setBored] = useState()
  const [selected, setSelected] = useState(false)
  const [type, setType] = useState()
  const [price, setPrice] = useState()
  const [current, setCurrent] = useState()
  const [previous, setPrevious] = useState()

  const handleBored = () => {
      selected ?
        axios
            .get(`https://www.boredapi.com/api/activity?type=${type}`)
            .then((response)=>{
                setBored(response.data)
            })
        :
        axios
            .get('https://www.boredapi.com/api/activity')
            .then((response)=>{
                setBored(response.data)
                setCurrent(response.data.key)
                setPrevious(current)
            })
  }

  const handlePrevious = () => {
    axios
        .get(`https://www.boredapi.com/api/activity?key=${previous}`)
        .then((response)=>{
            setBored(response.data)
        })
  }
  const handleType = (e) => {
    setSelected(true)
    setType(e.target.value)
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
      <h3>I'm Bored <a href='https://github.com/IntuitiveHarmony/portfolio-2022/blob/main/src/components/Bored.js' target="_blank" rel="noopener noreferrer"><i className="soc fa-brands fa-github pinkLink gitLink"></i></a></h3>
      <p>Feeling uninspired? <br/> Make a few optional selections and a random activity will be generated. <br/><br/> Powered by the <a href='https://www.boredapi.com/' target="_blank" rel="noopener noreferrer" className='pinkLink'>Bored Api</a></p>
      <select onChange={handleType}>
        <option disabled selected>Select Type (optional)</option>
        {bored ? bored.type === 'education' ? <option value='education' selected>Education</option> : <option value='education'>Education</option> : <option value='education'>Education</option> }

        {bored ? bored.type === 'recreational' ? <option value='recreational' selected>Recreational</option> : <option value='recreational'>Recreational</option> : <option value='recreational'>Recreational</option> }

        {bored ? bored.type === 'social' ? <option value='social' selected>Social</option> : <option value='social'>Social</option> : <option value='social'>Social</option> }

        <option value='diy'>DIY</option>

        {bored ? bored.type === 'charity' ? <option value='charity' selected>Charity</option> : <option value='charity'>Charity</option> : <option value='charity'>Charity</option> }

        {bored ? bored.type === 'cooking' ? <option value='cooking' selected>Cooking</option> : <option value='cooking'>Cooking</option> : <option value='cooking'>Cooking</option> }

        {bored ? bored.type === 'relaxation' ? <option value='relaxation' selected>Relaxation</option> : <option value='relaxation'>Relaxation</option> : <option value='relaxation'>Relaxation</option> }

        {bored ? bored.type === 'music' ? <option value='music' selected>Music</option> : <option value='music'>Music</option> : <option value='music'>Music</option> }

        {bored ? bored.type === 'busywork' ? <option value='busywork' selected>Busywork</option> : <option value='busywork'>Busywork</option> : <option value='busywork'>Busywork</option> }

      </select>

      {bored ?
        <>
          <div className='activityContainer'>
            <h4>{bored.activity}</h4>
            {bored.link === "" ? <></> : <a href={bored.link} className='pinkLink' target="_blank" rel="noopener noreferrer">{bored.link}</a> }
          </div>
        </>
        : <></> }
      <div className='submitBtn' onClick={() => handleBored()} >Get Activity</div>
      {previous ?
        <>
          <div className='submitBtn' onClick={() => handlePrevious()} >Previous</div></>
          : <></>}
    </>
  )
}

export default Bored
