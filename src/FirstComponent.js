import React from 'react'
import SecondComponent from './SecondComponent';

const FirstComponent = (props) => {
    console.log(props.data , "props in first component============");
  return (
    <>
    
    <div>FirstComponent</div>
    <SecondComponent heading={props.data}/>
    </>
  )
}

export default FirstComponent




































