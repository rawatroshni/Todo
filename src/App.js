import React from 'react'
import Index from './props/Index'
import State from './state/State'
import Condition from './conditional/Condition'


const App = () => {
  const Name = "Roshni"
  return (
      <>
      <div className="App">App</div>
      {/* props  */}
       {/* {<Index data={Name}/> } */}
       <State/>
       {/* <Condition/> */}
    </>
  )
}

export default App