import { useState } from "react"
import React  from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleClear = ()=>{
        let newText = '';
        setText(newText);
        setCount({
            word: 0,
            char: 0
        })
        props.showAlert("All text Cleared", "success")
    }
    const handleCopy =() =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard", "success")
    }
    const handleExtraSpace = ()=>{
        setText(text.replace(/[ ]+/g," "));
        props.showAlert("Extra Spaces Removed", "success")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
        setCount({
            word: event.target.value.replace(/\n/g," ").split(" ").filter(value=>value!=="").length,
            char: event.target.value.trim().length
        })
    }
    const [text, setText] = useState('');
    const [count, setCount] = useState({
        word: 0,
        char: 0
    });
    // text = "new text"; // incorrect way
    // setText("new text");  // correct way
  return (
    <div className="container" style={{color: (props.mode === "dark")?("white"):("black")}}>
        <div className ="my-3">
            <h1 className="mb-3">{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{color: (props.mode === "dark")?("white"):("black"), backgroundColor: (props.mode === "dark")?(props.darkTheme.bgColor):("white")}} id="mybox" rows="8"></textarea>
        </div>
            <button disabled={text.length === 0} className={`btn btn-${props.darkTheme.btnColor} m-2`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className={`btn btn-${props.darkTheme.btnColor} m-2`} onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className={`btn btn-${props.darkTheme.btnColor} m-2`} onClick={handleClear}>Clear Text</button>
            <button disabled={text.length === 0} className={`btn btn-${props.darkTheme.btnColor} m-2`} onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className={`btn btn-${props.darkTheme.btnColor} m-2`} onClick={handleExtraSpace}>Remove Extra Spaces</button>
            <h2 className="mt-4">Text Summary:</h2>
            <p>{count.word} Word{(count.word>1)? ('s'):('')} and {count.char} Character{(count.char>1)? ('s'):('')} </p>
            <p>Average Reading time : {count.word*0.008} Minutes</p>
    </div>
  )
}
