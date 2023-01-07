import RPS from './RPS'
import Palindrome from './Palindrome'
import RGBSlider from './RGBSlider'
import Bored from './Bored'
import BoredTable from './BoredTable'

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
      <BoredTable />
    </div>
  )
}

export default Games
