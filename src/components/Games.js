import RPS from './RPS'
import Palindrome from './Palindrome'
import RGBSlider from './RGBSlider'
import Bored from './Bored'
import BoredTable from './BoredTable'
import Calculator from './Calculator'

const Games = () => {


  return (
    <div className='projectContainer'>
      <RGBSlider />
      <br/>
      <br/>
      <h2>Games</h2>
      <RPS />
      <br/>
      <br/>
      <Palindrome />
      <br/>
      <br/>
      <Bored />
      <br/>
      <br/>
      <Calculator />
    </div>
  )
}

export default Games
