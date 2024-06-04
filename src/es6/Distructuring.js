import React from 'react'

const Distructuring = () => {
    const user = {
        name: "Shashank Sharma",
        age: 25,
        isMarried: false,
        phone: 8112357010
    }
   // old method 

    // const name = user.name;
    // const age = user.age;
    // const isMarried = user.isMarried;
    // const phone = user.phone;

    // new method object 

    //  const {name , age , phone , isMarried , gender} = {
    //     name: "Shashank Sharma",
    //     age: 25,
    //     isMarried: false,
    //     phone: 8112357010,
    //     gender : "Male"
    // }



    // const array = ["shashank sharma" , 8112357010 , "male"  , true ]

    // const [firstname , phone  , isMarried, gender  , data ] = array ;

    // console.log(firstname , phone , isMarried , gender , data);


  


    return (
        <div className='App'>Distructuring</div>
    )
}

export default Distructuring