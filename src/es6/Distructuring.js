import React from 'react'

const Distructuring = () => {
    // const user = {
    //     name: "Shashank Sharma",
    //     age: 25,
    //     isMarried: false,
    //     phone: 8112357010
    // }
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

    // array distructuring 

    // const array = ["shashank sharma" , 8112357010 , "male"  , true ]

    // const [firstname , phone  , isMarried, gender  , data ] = array ;

    // console.log(firstname , phone , isMarried , gender , data);


    // Home work 


    

    // Distructure the following object 

  //   const user = {
  //   "id": 1,
  //   "name": "Leanne Graham",
  //   "username": "Bret",
  //   "email": "Sincere@april.biz",
  //   "address": {
  //     "street": "Kulas Light",
  //     "suite": "Apt. 556",
  //     "city": "Gwenborough",
  //     "zipcode": "92998-3874",
  //     "geo": {
  //       "lat": "-37.3159",
  //       "lng": "81.1496"
  //     }
  //   },
  //   "phone": "1-770-736-8031 x56442",
  //   "website": "hildegard.org",
  //   "company": {
  //     "name": "Romaguera-Crona",
  //     "catchPhrase": "Multi-layered client-server neural-net",
  //     "bs": "harness real-time e-markets"
  //   }
  // }
  //   const {id , name , username , email , address , phone , website , company } =  user
  //   console.log(id , name , username , email , address , phone , website , company );

   const array =[ "mango" , "Apple" ,"banana" , "grapes" , "pear"]
   const  [one , Two ,Three , Four , Five] = array;
   console.log(one , Two ,Three , Four , Five);

    return (
        <div className='App'>Distructuring</div>
    )
}

export default Distructuring