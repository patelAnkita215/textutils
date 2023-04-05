import React, { useState } from 'react'

export default function TextFrom(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        setText("you have clicked on handleUpClick")
    }
    const handleOnChange = () => {
        console.log("on change");
    }
    const [text,setText] = useState('Enter text here');
  return (
    <>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </>
  )
}
