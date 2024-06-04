import React from 'react'

const Map = () => {

    /*
    Applies over array 
    return array 
    Operational method 
    Does not reduces length of an array 
    Syntax
    Array.map((item , index , array)=>{
        
    })
  
    */


    // const finalArray = ["Shashank", "Shivam", "Anmol", "Sunita", "Roshni"].map((item, index, array) => {
    //     return `${item} Sharma `
    // })


    // console.log(finalArray);


    const Students = ["Apple", "Mango", "Kiwi", "Banana"]

    return (
        <>
            <div className='App'>Map</div>
            <div className='App'>
                {
                    Students.map((item) => {
                        return <div className={`${item === "Apple" ? 'text-danger' : ""}`}>{item}</div>
                    })
                }
            </div>
        </>
    )
}

export default Map