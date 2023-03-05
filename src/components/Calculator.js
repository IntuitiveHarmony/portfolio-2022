import { useState } from 'react'


const Calculator = () => {
    const [num1, setNum1] = useState(null)
    const [num2, setNum2] = useState(null)
    const [display, setDisplay] = useState(0)

    const [firstNumEntered, setFirstNumberEntered] = useState(false)
    const [decimalEntered, setDecimalEntered] = useState(false)
    const [negativeEntered, setNegativeEntered] = useState(false)

    const [operator, setOperator] = useState(null)
    

    const handleUpdateValue = (value) => {
        if(value == '.') { 
            setDecimalEntered(true)
        }
        if(!firstNumEntered) {
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
        setFirstNumberEntered(true)
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
        if(!firstNumEntered) {
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
        setFirstNumberEntered(false)
        setDecimalEntered(false)
        setOperator()
    }
    const handleBackspace = () => {
        if(!firstNumEntered) {
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
            <h3>Calculator</h3>
            <div className='claculatorContainer'>
                <div className='calculatorDisplay'> {display} </div>
                <div className='calculatorButton' onClick={() => handleClearAll()}>Clear All</div>
                <div className='calculatorButton' onClick={() => handleBackspace()}>Backspace</div>
                <div className='calculatorButton' onClick={() => handleNegative()}>+/-</div>
                <div className='calculatorButton' onClick={() => handlePercentage()}>%</div>
                <div className='calculatorButton' onClick={() => handleUpdateOperator('/')}>/</div>
                <div className='calculatorButton' onClick={() => handleUpdateOperator('X')}>X</div>
                <div className='calculatorButton' onClick={() => handleUpdateOperator('-')}>-</div>
                <div className='calculatorButton' onClick={() => handleUpdateOperator('+')}>+</div>
                <div className='calculatorButton' onClick={() => handleEnter()}>=</div>
                <div className='calculatorButton' onClick={() => handleUpdateValue('1')}>1</div>
                <div className='calculatorButton' onClick={() => handleUpdateValue('2')}>2</div>
                <div className='calculatorButton' onClick={() => handleUpdateValue('3')}>3</div>
                <div className='calculatorButton' onClick={() => handleUpdateValue('4')}>4</div>
                <div className='calculatorButton' onClick={() => handleUpdateValue('5')}>5</div>
                <div className='calculatorButton' onClick={() => handleUpdateValue('6')}>6</div>
                <div className='calculatorButton' onClick={() => handleUpdateValue('7')}>7</div>
                <div className='calculatorButton' onClick={() => handleUpdateValue('8')}>8</div>
                <div className='calculatorButton' onClick={() => handleUpdateValue('9')}>9</div>
                <div className='calculatorButton' onClick={() => handleUpdateValue('0')}>0</div>
                {decimalEntered ? <div className='calculatorButton'>.</div> : <div className='calculatorButton' onClick={() => handleUpdateValue('.')}>.</div> } 
                
            </div>
        </>
    )
 }

export default Calculator