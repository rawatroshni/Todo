import React from 'react'

import { data1, data2 , data3 } from "../data/dummyDada"

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

    




    const maleArray = data2.filter((item) => item.gender === "Male")
    const femaleArray = data2.filter((item) => item.gender === "Female")



     const finalArray = data3.map((item)=>{
        if(item.name.split(' ').length === 2) {
            return item
        }else {
            return {
                name : `${item.name} ${prompt(`Enter sur name for ${item.name}`)}`
            }
        }
     })

     console.log(finalArray);



    return (
        <div className='App'>Methods</div>
    )
}

export default Methods