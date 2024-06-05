import React from 'react'

import { data1 } from "../data/dummyDada"

const Methods = () => {
   
    const newArray = data1.map((item) => {
        if (item.age >= 18) {
            return {
                ...item,
                isValidForDl: true
            }
        } else {
            return {
                ...item,
                isValidForDl: false

            }
        }
    })



    console.log(newArray, "new Array");




    return (
        <div className='App'>Methods</div>
    )
}

export default Methods