import React from 'react'

const SecondComponent = (props) => {

    console.log(props , "props in second component");
  return (
    <div>SecondComponent {props.heading}</div>
  )
}

export default SecondComponent