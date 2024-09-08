import React, { useState } from 'react'


export default function TextForm(props) {    

    const handleUpClick = () => {
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
        setText(event.target.value);
    }
    const [text, setText] = useState('');

    const btnHoverStyle = {
        backgroundColor: props.mode === 'dark' ? '#696969' : '#e2e6ea', 
        color: props.mode === 'dark' ? '#fff' : '#000',
        borderColor: props.mode === 'dark' ? 'lightgrey' : '#333', 
    };      
    const btnBaseStyle = {
        backgroundColor: props.mode === 'dark' ? '#808080' : '#f8f9fa',
        color: props.mode === 'dark' ? '#fff' : '#000',
        borderColor: props.mode === 'dark' ? 'white' : '#000',
    };

  return (
    <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange}  rows="8" style={{backgroundColor: props.mode === 'dark'?'#918f8f':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
            </div> 
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} style={btnBaseStyle}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = btnHoverStyle.backgroundColor;
                e.currentTarget.style.borderColor = btnHoverStyle.borderColor;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = btnBaseStyle.backgroundColor;
                e.currentTarget.style.borderColor = btnBaseStyle.borderColor;
            }}>Upper Case</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}style={btnBaseStyle}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = btnHoverStyle.backgroundColor;
                e.currentTarget.style.borderColor = btnHoverStyle.borderColor;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = btnBaseStyle.backgroundColor;
                e.currentTarget.style.borderColor = btnBaseStyle.borderColor;
            }}>Lower Case</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} style={btnBaseStyle}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = btnHoverStyle.backgroundColor;
                e.currentTarget.style.borderColor = btnHoverStyle.borderColor;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = btnBaseStyle.backgroundColor;
                e.currentTarget.style.borderColor = btnBaseStyle.borderColor;
            }}>Copy</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpace}style={btnBaseStyle}
                onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = btnHoverStyle.backgroundColor;
                e.currentTarget.style.borderColor = btnHoverStyle.borderColor;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = btnBaseStyle.backgroundColor;
                e.currentTarget.style.borderColor = btnBaseStyle.borderColor;
            }}>Remove Extra Space</button>
            <button disabled={text.length === 0} className="btn btn-danger mx-1 float-end" onClick={handleClear}>Clear All</button>          
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h3>Summary</h3>
            <p>Word Count: {(text.split(/\s+/).filter((element)=>{return element.length!== 0}).length)} and Character Count: {text.length} </p>
            <p>Time: {0.008 * text.split(" ").filter((element)=> {return element.length!== 0}).length} {0.008 * text.split(" ").filter((element)=> {return element.length!== 0}).length > 1 ?'Minuts to Read': 'Minut to Read'}</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text: 'Nothing to Preview!'}</p>
        </div>
    </>
  )
}
