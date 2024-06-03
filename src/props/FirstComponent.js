import React from 'react'
import SecondComponent from './SecondComponent';

const FirstComponent = (props) => {
  return (
    <>
    
    <div>FirstComponent</div>
    <SecondComponent heading={props.data}/>
    </>
  )
}

export default FirstComponent




































