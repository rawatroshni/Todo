import React from 'react'
import Index from './props/Index'
import State from './state/State'
import Condition from './conditional/Condition'
import Distructuring from './es6/Distructuring'
import Map from './es6/Map'
import Filter from './es6/Filter'


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
       <Filter/>
    </>
  )
}

export default App