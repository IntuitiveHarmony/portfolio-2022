import { useState } from 'react'


const Calculator = () => {
    const [result, setResult] = useState(0)
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [display, setDisplay] = useState(num1)
    const [firstNumEntered, setFirstNumberEntered] = useState(false)
    const [decimalEntered, setDecimalEntered] = useState(false)
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
    }

    const add = () => {
        setResult(num1 + num2)
        
    }



    return (
        <>
            <h3>Calculator</h3>
            <div className='claculatorContainer'>
                <div> {display} </div>
                <div>Clear</div>
                <div>+/-</div>
                <div>%</div>
                <div onClick={() => handleUpdateOperator('/')}>/</div>
                <div onClick={() => handleUpdateOperator('X')}>X</div>
                <div onClick={() => handleUpdateOperator('-')}>-</div>
                <div onClick={() => handleUpdateOperator('+')}>+</div>
                <div>=</div>
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