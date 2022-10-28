import { useState } from 'react'


const Palindrome = () => {
  const [inputStr, setInputStr] = useState()
  const [start, setStart] = useState(false)
  const [pass, setPass] = useState()

  const handleInputStr = (e) => {
    setInputStr(e.target.value)
    setStart(false)
    setPass(false)
  }

  function palindrome(str) {
    setStart(true)
    let clean = str.split('')

    for (let i = 0; i < clean.length; i++) {
      if (clean[i] === '_') {
        delete clean[i]
       } else if (clean[i] === ',') {
         delete clean[i]
       } else if (clean[i] === ' ') {
         delete clean[i]
       } else if (clean[i] === '.') {
         delete clean[i]
       } else if (clean[i] === '-') {
         delete clean[i]
       } else if (clean[i] === '!') {
         delete clean[i]
       } else if (clean[i] === '*') {
         delete clean[i]
       } else if (clean[i] === '#') {
         delete clean[i]
       } else if (clean[i] === '(') {
         delete clean[i]
       } else if (clean[i] === ')') {
         delete clean[i]
       } else {}
    }

    if (clean.join('').toUpperCase() === clean.reverse().join('').toUpperCase()) {
       setPass(true)
     } else {
       setPass(false)
     }
  }


  return (
    <>
      <div className='gamesContainer'>
        <h3>Palindrome Checker</h3>
        <p>This was inspired by a challenge from <a className='pinkLink' href='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker' target="_blank" rel="noopener noreferrer">freeCodeCamp.org</a><br/><span className='yellowTxt'># _ , . ! * ( )</span> and <span className='yellowTxt'>spaces</span> will be removed from the input</p>
          <input onChange={handleInputStr} placeholder='ex. Taco cat!'></input>
          <div className='submitBtn' onClick={() => palindrome(inputStr)}>Check</div>
          {pass ?
            <>
              <div>
                <p><span className='greenTxt'>{inputStr}</span> is indeed a palindrome.</p>
              </div>
            </>
            :
            <>
              {start ? <div>
                <p><span className='redTxt'>{inputStr}</span> is not a palindrome.</p>
              </div> : <></> }

            </>}
      </div>
    </>
  )
}

export default Palindrome
