import axios from 'axios'
import {useState, useEffect} from 'react'

const Bored = () => {
  const [bored, setBored] = useState()
  const [type, setType] = useState()
  const [price, setPrice] = useState()
  const [list, setList] = useState([])

  const handleBored = () => {
      type ?
        axios
            .get(`https://www.boredapi.com/api/activity?type=${type}`)
            .then((response)=>{
                setBored(response.data)
                setList([...list, { activity: response.data.activity, key: response.data.key, type: response.data.type }])
            })
        :
        axios
            .get('https://www.boredapi.com/api/activity')
            .then((response)=>{
                setBored(response.data)
                setList([...list, { activity: response.data.activity, key: response.data.key, type: response.data.type }])
            })
  }
  const handleType = (e) => {
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
      <h3 id='bored'>I'm Bored <a href='https://github.com/IntuitiveHarmony/portfolio-2022/blob/main/src/components/Bored.js' target="_blank" rel="noopener noreferrer"><i className="soc fa-brands fa-github pinkLink gitLink"></i></a></h3>
      <p>Feeling uninspired? <br/> - Use the dropdown to pick a type (optional) <br/> - Press the button to generate a random activity <br/>- Keep pressing the button to make a list <br/><br/> Powered by the <a href='https://www.boredapi.com/' target="_blank" rel="noopener noreferrer" className='pinkLink'>Bored API</a></p>
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
      <ul>
      {list ? <></> : <h1>My to do list:</h1>}
      {list.map((item, index) =>
        <li key={index}>{index + 1}) id #<a href={'http://www.boredapi.com/api/activity?key=' + item.key} className='pinkLink' target="_blank" rel="noopener noreferrer">{item.key}</a> <span className='greenTxt'>{item.type}</span><br/>&nbsp;&nbsp;&nbsp;&nbsp; {item.activity}<br/></li>
      )}
      </ul>
    </>
  )
}

export default Bored
