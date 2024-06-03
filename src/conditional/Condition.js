import React, { useState } from 'react'

const Condition = () => {
    const [color, setColor] = useState('bg-primary')

    const handleChangeColor = () => {
        setColor('bg-success')
    }
    return (
        <div className='App'>
            <button onClick={handleChangeColor}>Change Color</button>
            <div className={`w-25 ${color}`} style={{ height: "100px" }}>
                sacxse
            </div>

        </div>
    )
}

export default Condition