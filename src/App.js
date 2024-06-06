import React from 'react'
import Index from './props/Index'
import State from './state/State'
import Condition from './conditional/Condition'
import Distructuring from './es6/Distructuring'
import Map from './es6/Map'
import Filter from './es6/Filter'
import Search from './es6/Search'
import Methods from './javascript/Methods'
import Users from './axios/Users'


const App = () => {
  const Name = "Roshni"
  return (
      <>
      <div className="App">App</div>
      {/* props  */}
       {/* {<Index data={Name}/> } */}
       {/* <State/> */}
       {/* <Condition/> */}
        {/* <Distructuring/>  */}
       {/* <Map/> */}
       {/* <Filter/> */}
       {/* <Search/> */}
       {/* <Methods/> */}
       <Users/>
    </>
  )
}

export default App