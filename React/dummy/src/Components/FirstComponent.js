import React from 'react'

const FirstComponent = (props) => {
  return (
    <div className='modal'>
        <h1> {props.owner} Application </h1>
        <p> Development phase </p>
        <button onClick={props.closeModal}> Close </button>
    </div>
  )
}

export default FirstComponent;
