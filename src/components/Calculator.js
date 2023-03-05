import { useState } from 'react'


const Calculator = () => {
    const [num1, setNum1] = useState(null)
    const [num2, setNum2] = useState(null)
    const [display, setDisplay] = useState(0)

    const [num1Entered, setNum1Entered] = useState(false)
    const [decimalEntered, setDecimalEntered] = useState(false)
    const [negativeEntered, setNegativeEntered] = useState(false)

    const [operator, setOperator] = useState(null)
    

    const handleUpdateValue = (value) => {
        if(value == '.') { 
            setDecimalEntered(true)
        }
        if(!num1Entered) {
            if(num1 == null) {
                setNum1(value)
                setDisplay(value)
            } else {
                setNum1(num1 + value)
                setDisplay(num1 + value)
            }
        } else {
            if(num2 == null) {
                setNum2(value)
                setDisplay(value)
            } else {
                setNum2(num2 + value)
                setDisplay(num2 + value)
            }
        }
    }
    const handleUpdateOperator = (value) => {
        if(num1 == null) {
            setNum1(0)
        }
        setOperator(value)
        setDecimalEntered(false)
        setNum1Entered(true)
        setNegativeEntered(false)
        setNum2(null) 
    }
    const handleNegative = () => {
        if(!operator) {
            if(!negativeEntered) {
                setNum1('-' + num1)
                setDisplay('-' + num1)
                setNegativeEntered(!negativeEntered)
            } else {
                setNum1(num1.slice(1))
                setDisplay(num1.slice(1))
                setNegativeEntered(!negativeEntered)
            }
        } else {
            if(!negativeEntered) {
                setNum2('-' + num2)
                setDisplay('-' + num2)
                setNegativeEntered(!negativeEntered)
            } else {
                setNum2(num2.slice(1))
                setDisplay(num2.slice(1))
                setNegativeEntered(!negativeEntered)
            }
        }
    }
    const handlePercentage = () => {
        if(!num1Entered) {
            setNum1(num1 / 100)
            setDisplay(num1 / 100)
        } else {
            setNum2(num2 / 100)
            setDisplay(num2 / 100)
        }
    }
    const handleEnter = () => {
        if(operator == '/') {
            setDisplay(Number(num1) / Number(num2))
            setNum1(Number(num1) / Number(num2))
        }
        if(operator == 'X') {
            setDisplay(Number(num1) * Number(num2))
            setNum1(Number(num1) * Number(num2))
        }
        if(operator == '-') {
            setDisplay(Number(num1) - Number(num2))
            setNum1(Number(num1) - Number(num2))
        }
        if(operator == '+') {
            setDisplay(Number(num1) + Number(num2))
            setNum1(Number(num1) + Number(num2))
        }
        // setNum1(result)
        // setNum2(0)
        // setFirstNumberEntered(false)
        setDecimalEntered(false)
    }

    const handleClearAll = () => {
        setNum1(null)
        setNum2(null)
        setDisplay(0)
        setNum1Entered(false)
        setDecimalEntered(false)
        setOperator()
    }
    const handleBackspace = () => {
        if(!num1Entered) {
            setNum1(num1.slice(0, -1))
            setDisplay(display.slice(0, -1))
        } else {
            if(!num2) {
                setNum2(num2.slice(0, -1))
                setDisplay(display.slice(0, -1))
            }
        }
    }


    return (
        <>
            <h3>Calculator <a href='https://github.com/IntuitiveHarmony/portfolio-2022/blob/main/src/components/Calculator.js' target="_blank" rel="noopener noreferrer"><i className="soc fa-brands fa-github pinkLink gitLink"></i></a></h3>
            <div className='claculatorContainer'>
                <div className='calculatorDisplay'> {display} </div>
                <div className='calculatorButton clear' onClick={() => handleClearAll()}>C</div>
                <div className='calculatorButton backspace' onClick={() => handleBackspace()}>"->"</div>
                <div className='calculatorButton negative' onClick={() => handleNegative()}>+/-</div>
                <div className='calculatorButton percent' onClick={() => handlePercentage()}>%</div>
                <div className='calculatorButton divide' onClick={() => handleUpdateOperator('/')}>/</div>
                <div className='calculatorButton multiply' onClick={() => handleUpdateOperator('X')}>X</div>
                <div className='calculatorButton subtract' onClick={() => handleUpdateOperator('-')}>-</div>
                <div className='calculatorButton add' onClick={() => handleUpdateOperator('+')}>+</div>
                <div className='calculatorButton equal' onClick={() => handleEnter()}>=</div>
                <div className='calculatorButton num1' onClick={() => handleUpdateValue('1')}>1</div>
                <div className='calculatorButton num2' onClick={() => handleUpdateValue('2')}>2</div>
                <div className='calculatorButton num3' onClick={() => handleUpdateValue('3')}>3</div>
                <div className='calculatorButton num4' onClick={() => handleUpdateValue('4')}>4</div>
                <div className='calculatorButton num5' onClick={() => handleUpdateValue('5')}>5</div>
                <div className='calculatorButton num6' onClick={() => handleUpdateValue('6')}>6</div>
                <div className='calculatorButton num7' onClick={() => handleUpdateValue('7')}>7</div>
                <div className='calculatorButton num8' onClick={() => handleUpdateValue('8')}>8</div>
                <div className='calculatorButton num9' onClick={() => handleUpdateValue('9')}>9</div>
                <div className='calculatorButton num0' onClick={() => handleUpdateValue('0')}>0</div>
                {decimalEntered ? <div className='calculatorButton nump'>.</div> : <div className='calculatorButton' onClick={() => handleUpdateValue('.')}>.</div> } 
                
            </div>
        </>
    )
 }

export default Calculator