import React from 'react'
import Index from './props/Index'


const App = () => {
  const Name = "Roshni"
  return (
      <>
      <div className="App">App</div>
      {/* props  */}
       {<Index data={Name}/> }
    </>
  )
}

export default App