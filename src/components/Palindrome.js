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

  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Check if the input string is a palindrome
    palindrome(inputStr);
  };

  const handleKeyDown = (event) => {
    // Listen for the enter key
    if (event.keyCode === 13) {
      handleSubmit(event);
    }
  };

  // Here is the code I wrote for the challenge:
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // function palindrome(str) {
  //   setStart(true)
  //   let clean = str.split('')

  //   for (let i = 0; i < clean.length; i++) {
  //     if (clean[i] === '_') {
  //       delete clean[i]
  //      } else if (clean[i] === ',') {
  //        delete clean[i]
  //      } else if (clean[i] === ' ') {
  //        delete clean[i]
  //      } else if (clean[i] === '.') {
  //        delete clean[i]
  //      } else if (clean[i] === '-') {
  //        delete clean[i]
  //      } else if (clean[i] === '!') {
  //        delete clean[i]
  //      } else if (clean[i] === '*') {
  //        delete clean[i]
  //      } else if (clean[i] === '#') {
  //        delete clean[i]
  //      } else if (clean[i] === '(') {
  //        delete clean[i]
  //      } else if (clean[i] === ')') {
  //        delete clean[i]
  //      } else {}
  //   }

  //   if (clean.join('').toUpperCase() === clean.reverse().join('').toUpperCase()) {
  //      setPass(true)
  //    } else {
  //      setPass(false)
  //    }
  // }

  // Here is Chat GPT DRYing out my palindrome code and making it better:
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function palindrome(str) {
    setStart(true);
    const clean = str.replace(/[^a-zA-Z0-9]/g, "");
    setPass(clean.toUpperCase() === clean.split("").reverse().join("").toUpperCase());
  }

  return (
    <>
      <div className='gamesContainer'>
        <h3>Palindrome Checker <a href='https://github.com/IntuitiveHarmony/portfolio-2022/blob/main/src/components/Palindrome.js' target="_blank" rel="noopener noreferrer"><i className="soc fa-brands fa-github pinkLink gitLink"></i></a></h3>
        <p>Inspired by a challenge from <a className='pinkLink' href='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker' target="_blank" rel="noopener noreferrer">freeCodeCamp.org</a><br/><span className='yellowTxt'># _ , . ! * ( )</span> and <span className='yellowTxt'>spaces</span> will be removed from the input</p>
          <input onChange={handleInputStr} onKeyDown={handleKeyDown} placeholder='ex. Taco cat!'></input>
          <div className='submitBtn' onClick={() => handleSubmit()}>Check</div>
          {pass ?
            <>
              <div>
                <p><span className='greenTxt'>{inputStr}</span> is a palindrome</p>
              </div>
            </>
            :
            <>
              {start ? <div>
                <p><span className='redTxt'>{inputStr}</span> is not a palindrome</p>
              </div> : <></> }

            </>}
      </div>
    </>
  )
}

export default Palindrome
