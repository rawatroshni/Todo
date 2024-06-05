import React from 'react'

import { data1, data2 } from "../data/dummyDada"

const Methods = () => {

    const newArray = data1.map((item) => {

        return {
            ...item,
            isValudForDl: item.age >= 18 ? true : false,
            message : item.age >= 18 ? `You are elidigible ${item.age - 18} years before` : `You have to wait for ${18 - item.age} years`
        }

       

        // if (item.age >= 18) {
        //     return {
        //         ...item,
        //         isValidForDl: true
        //     }
        // } else {
        //     return {
        //         ...item,
        //         isValidForDl: false

        //     }
        // }
    })

    console.log(newArray ,"newArray");




    const maleArray = data2.filter((item) => item.gender === "Male")
    const femaleArray = data2.filter((item) => item.gender === "Female")







    return (
        <div className='App'>Methods</div>
    )
}

export default Methods