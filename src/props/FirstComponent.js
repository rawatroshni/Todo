import React from 'react'
import SecondComponent from './SecondComponent';

const FirstComponent = (props) => {

  
  // console.log(props);
  return (
    <>
    
    <div>FirstComponent</div>
    <SecondComponent heading={props.data} name={props.name}/>
    
    </>
  )
}

export default FirstComponent




































