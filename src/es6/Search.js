import React, { useState } from 'react'


const Search = () => {
  const [firstName, firstSearch] = useState('')
  const display =["one", "two" , "three" , "four"]
  const show = display.filter((item) => item.includes
  (firstName));
  console.log(show);
  return (
    <>
    <div className='App'>
    <h1>Search</h1>
    <div>
      <input onChange={(e) => firstSearch(e.target.value)} placeholder='please enter your name'/>
    </div>
    <div className="mt-3">
      {/* <h2> "display"</h2> */}
      <h3>display</h3>
     {
      display.filter((item)=> item.includes(firstName)).map((item) =>{
         return <div>{item}</div>
      })
     }

    </div>

    {
      display.filter((item)=> item.includes(firstName)).length === 0 && (
        <div> No DATA Found</div>
      )
    }

    </div>
    </>
    

  )
}

export default Search