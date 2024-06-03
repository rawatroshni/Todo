import React from 'react'
import Index from './props/Index'
import State from './state/State'


const App = () => {
  const Name = "Roshni"
  return (
      <>
      <div className="App">App</div>
      {/* props  */}
       {/* {<Index data={Name}/> } */}
       <State/>
    </>
  )
}

export default App