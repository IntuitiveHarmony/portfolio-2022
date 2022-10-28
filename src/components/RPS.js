import { useState } from 'react'


const RPS = () => {
//  State will indicate the winner of each hand
  const [playerMove, setPlayerMove] = useState()
  const [computerMove, setComputerMove] = useState()
  const [tie, setTie] = useState()
  const [rock_scissor, setRock_scissor] = useState()
  const [rock_paper, setRock_paper] = useState()
  const [paper_scissor, setPaper_scissor] = useState()
  const [paper_rock, setPaper_rock] = useState()
  const [scissor_rock, setScissor_rock] = useState()
  const [scissor_paper, setScissor_paper] = useState()

  function rockPaperScissor (hand) {
    const choices = ['Rock', 'Paper', 'Scissor']
    setPlayerMove(hand)
    let randomMove = choices[Math.floor(Math.random()*choices.length)]
    setComputerMove(randomMove)
    if (hand === randomMove) {
      setTie(true)
      setRock_scissor()
      setRock_paper()
      setPaper_scissor()
      setPaper_rock()
      setScissor_rock()
      setScissor_paper()
    } else if (hand === 'Rock' && randomMove === 'Scissor') {
      setTie()
      setRock_scissor(true)
      setRock_paper()
      setPaper_scissor()
      setPaper_rock()
      setScissor_rock()
      setScissor_paper()
    } else if (hand === 'Rock' && randomMove === 'Paper') {
      setTie()
      setRock_scissor()
      setRock_paper(true)
      setPaper_scissor()
      setPaper_rock()
      setScissor_rock()
      setScissor_paper()
    } else if (hand === 'Paper' && randomMove === 'Scissor') {
      setTie()
      setRock_scissor()
      setRock_paper()
      setPaper_scissor(true)
      setPaper_rock()
      setScissor_rock()
      setScissor_paper()
    } else if (hand === 'Paper' && randomMove === 'Rock') {
      setTie()
      setRock_scissor()
      setRock_paper()
      setPaper_scissor()
      setPaper_rock(true)
      setScissor_rock()
      setScissor_paper()
    } else if (hand === 'Scissor' && randomMove === 'Rock') {
      setTie()
      setRock_scissor()
      setRock_paper()
      setPaper_scissor()
      setPaper_rock()
      setScissor_rock(true)
      setScissor_paper()
    } else if (hand === 'Scissor' && randomMove === 'Paper') {
      setTie()
      setRock_scissor()
      setRock_paper()
      setPaper_scissor()
      setPaper_rock()
      setScissor_rock()
      setScissor_paper(true)
    }
  }

  function handleRock () {
    rockPaperScissor('Rock')
  }
  const handlePaper = () => {
    rockPaperScissor('Paper')
  }
  const handleScissor = () => {
    rockPaperScissor('Scissor')
  }

  return (
    <div className='gamesContainer'>
      <h3>Rock Paper Scissor <a href='https://github.com/IntuitiveHarmony/portfolio-2022/blob/main/src/components/RPS.js' target="_blank" rel="noopener noreferrer"><i className="soc fa-brands fa-github pinkLink"></i></a></h3>
      <div className='rpsContainer'>
        <div className='rpsHand' onClick={() => handleRock()}>Rock</div>
        <div className='rpsHand' onClick={() => handlePaper()}>Paper</div>
        <div className='rpsHand' onClick={() => handleScissor()}>Scissor</div>
        </div>
        <div className='rpsOutput'>
        {tie ?
          <>
            <p>Player Chose: <span className='yellowTxt'>{playerMove}</span> &emsp; Computer Chose: <span className='yellowTxt'>{computerMove}</span></p>
            <p>Tie game!</p>
          </>
          : <></> }
        {rock_scissor ?
          <>
            <p>Player Chose: <span className='greenTxt'>{playerMove}</span> &emsp; Computer Chose: <span className='redTxt'>{computerMove}</span></p>
            <p>Player Wins!</p>
          </>
          : <></> }
        {rock_paper ?
          <>
            <p>Player Chose: <span className='redTxt'>{playerMove}</span> &emsp; Computer Chose: <span className='greenTxt'>{computerMove}</span></p>
            <p>Computer Wins!</p>
          </>
          : <></> }
        {paper_scissor ?
          <>
            <p>Player Chose: <span className='redTxt'>{playerMove}</span> &emsp; Computer Chose: <span className='greenTxt'>{computerMove}</span></p>
            <p>Computer Wins!</p>
          </>
          : <></> }
        {paper_rock ?
          <>
            <p>Player Chose: <span className='greenTxt'>{playerMove}</span> &emsp; Computer Chose: <span className='redTxt'>{computerMove}</span></p>
            <p>Player Wins!</p>
          </>
          : <></> }
        {scissor_rock ?
          <>
            <p>Player Chose: <span className='redTxt'>{playerMove}</span> &emsp; Computer Chose: <span className='greenTxt'>{computerMove}</span></p>
            <p>Computer Wins!</p>
          </>
          : <></> }
        {scissor_paper ?
          <>
            <p>Player Chose: <span className='greenTxt'>{playerMove}</span> &emsp; Computer Chose: <span className='redTxt'>{computerMove}</span></p>
            <p>Player Wins!</p>
          </>
          : <></> }
      </div>
    </div>
  )
}

export default RPS
