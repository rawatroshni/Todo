import React from 'react'

import { data1 , data2} from "../data/dummyDada"

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
    



    const maleArray = data2.filter((item)=>item.gender === "Male")
    const femaleArray = data2.filter((item)=>item.gender === "Female")







    return (
        <div className='App'>Methods</div>
    )
}

export default Methods