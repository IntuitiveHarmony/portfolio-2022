import { useState } from 'react'


const Calculator = () => {
    const [result, setResult] = useState(0)
    const [num1, setNum1] = useState()
    const [num2, sertNum2] = useState()
    const [display, setDisplay] = useState()

    const handleUpdateValue = () => {
        if(num1 == undefined)
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
                <div>1</div>
                <div>2</div>
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