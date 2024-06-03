import React, { useState } from 'react'

const State = () => {
    const [count, setCount] = useState(0);

    
    const handleIncrease = () => {
        setCount(count + 1)
    }

    const handleDecrease = () => {

        if(count > 0) {
            setCount(count - 1)
        }else{
            setCount(0)
        }
       
    }

    return (
        <div className="App">


            <button onClick={handleDecrease}>-</button>
            {count}
            <button onClick={handleIncrease}>+</button>

        </div>
    )
}

export default State