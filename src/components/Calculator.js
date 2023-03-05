import { useState } from 'react'


const Calculator = () => {
    const [result, setResult] = useState(0)
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [display, setDisplay] = useState(0)

    const [firstNumEntered, setFirstNumberEntered] = useState(false)
    const [decimalEntered, setDecimalEntered] = useState(false)
    const [negativeEntered, setNegativeEntered] = useState(false)

    const [operator, setOperator] = useState()
    

    const handleUpdateValue = (value) => {
        if(value == '.') { 
            setDecimalEntered(true)
        }
        if(!firstNumEntered) {
            if(num1 == 0) {
                setNum1(value)
                setDisplay(value)
            } else {
                setNum1(num1 + value)
                setDisplay(num1 + value)
            }
        } else {
            if(num2 == 0) {
                setNum2(value)
                setDisplay(value)
            } else {
                setNum2(num2 + value)
                setDisplay(num2 + value)
            }
        }
    }
    const handleUpdateOperator = (value) => {
        setOperator(value)
        setFirstNumberEntered(true)
        setNegativeEntered(false) 
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
    const handleEnter = () => {
        if(operator == '/') {
            setResult(Number(num1) / Number(num2))
            setDisplay(Number(num1) / Number(num2))
        }
        if(operator == 'X') {
            setResult(Number(num1) * Number(num2))
            setDisplay(Number(num1) * Number(num2))
        }
        if(operator == '-') {
            setResult(Number(num1) - Number(num2))
            setDisplay(Number(num1) - Number(num2))
        }
        if(operator == '+') {
            setResult(Number(num1) + Number(num2))
            setDisplay(Number(num1) + Number(num2))
        }
    }

    const handleClearAll = () => {
        setResult(0)
        setNum1(0)
        setNum2(0)
        setDisplay(0)
        setFirstNumberEntered(false)
        setDecimalEntered(false)
        setOperator()
    }


    return (
        <>
            <h3>Calculator</h3>
            <div className='claculatorContainer'>
                <div> {display} </div>
                <div onClick={() => handleClearAll()}>Clear All</div>
                <div onClick={() => handleNegative()}>+/-</div>
                <div>%</div>
                <div onClick={() => handleUpdateOperator('/')}>/</div>
                <div onClick={() => handleUpdateOperator('X')}>X</div>
                <div onClick={() => handleUpdateOperator('-')}>-</div>
                <div onClick={() => handleUpdateOperator('+')}>+</div>
                <div onClick={() => handleEnter()}>=</div>
                <div onClick={() => handleUpdateValue('1')}>1</div>
                <div onClick={() => handleUpdateValue('2')}>2</div>
                <div onClick={() => handleUpdateValue('3')}>3</div>
                <div onClick={() => handleUpdateValue('4')}>4</div>
                <div onClick={() => handleUpdateValue('5')}>5</div>
                <div onClick={() => handleUpdateValue('6')}>6</div>
                <div onClick={() => handleUpdateValue('7')}>7</div>
                <div onClick={() => handleUpdateValue('8')}>8</div>
                <div onClick={() => handleUpdateValue('9')}>9</div>
                <div onClick={() => handleUpdateValue('0')}>0</div>
                {decimalEntered ? <div>.</div> : <div onClick={() => handleUpdateValue('.')}>.</div> } 
                
            </div>
        </>
    )
 }

export default Calculator