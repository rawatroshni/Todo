import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap';

const State = () => {
    const [count, setCount] = useState(0);


    const handleIncrease = () => {
        if (count < 15) {
            setCount(count + 1)
        } else {
            console.log("not be added");
        }
    }

    const handleDecrease = () => {

        if (count > 0) {
            setCount(count - 1)
        } else {
            setCount(0)
        }

    }

    return (
        <div className={`App ${count === 10 ? 'bg-primary' : ''}`}>
            <button className='btn btn-sm btn-danger' onClick={handleDecrease}>-</button>
            {count}
            <button className='btn btn-sm btn-primary' onClick={handleIncrease}>+</button>
        </div>
    )
}

export default State