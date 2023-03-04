import { useState } from 'react'


const Calculator = () => {
    const [result, setResult] = useState(0)
    const [num1, setNum1] = useState(0)
    const [num2, sertNum2] = useState()
    const [display, setDisplay] = useState()
    const [firstNumEntered, setFirstNumberEntered] = useState(false)
    

    const handleUpdateValue = (value) => {
        if(!firstNumEntered) {
            if(num1 == 0) {
                setNum1(value)
            } else {
                setNum1(num1 + value)
            }
        }
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
                <div>/</div>
                <div>X</div>
                <div>-</div>
                <div>+</div>
                <div>=</div>
                <div onClick={() => handleUpdateValue('1')}>1</div>
                <div onClick={() => handleUpdateValue('2')}>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>0</div>
                <div>.</div>
                
            </div>
        </>
    )
 }

export default Calculator