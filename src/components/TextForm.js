import React, { useState } from 'react'


export default function TextForm(props) {    

    const handleUpClick = () => {
        // console.log('Uppercase Click.');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted Successfully in UpperCase!', 'success');
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted Successfully in LowerCase!', 'success');
    }
    const handleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Clear Successfully!', 'success');
    }
    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copy Successfully!', 'success');
    }
    const handleRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(""));
        props.showAlert('Removed Space Successfully!', 'success');
    }

    const handleOnChange = (event) => {
        // console.log('Onchange Fired.');
        setText(event.target.value);
    }
    const [text, setText] = useState('');

  return (
    <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange}  rows="8" style={{backgroundColor: props.mode === 'dark'?'gray':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
            </div> 
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Upper Case</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Lower Case</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-1" onClick={handleRemoveSpace}>Remove Extra Space</button>
            <button className="btn btn-danger mx-1 float-end" onClick={handleClear}>Clear</button>          
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h3>Summary</h3>
            <p>Word Count: {(text.split(" ").length)}, Character Count: {text.length} </p>
            <p>Read Time: {0.008 * text.length} {(0.008 * text.length) > 1 ?'Minuts': 'Minut'}</p>
            <h3>Preview</h3>
            <p>{text.length>0 ? text: 'Enter your text above the box to preview.'}</p>
        </div>
    </>
  )
}
