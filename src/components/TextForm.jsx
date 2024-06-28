import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Input Your Text");
    // setText("Enter Your Text"); 

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleUpChange = () => {
        // console.log("Btn click");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Turn into UpperCase", "success");

    }

    const handleLoChange = () => {
        // console.log("Btn click");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Turn into LowerCase", "success");

    }
    const handleSpeak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
        props.showAlert("You can hear Here", "success");

    }

    const handleClear = () => {
        setText('');
        props.showAlert("Text Field Empty", "success");

    }

    const handleCopy = () => {
        // var newText = document.getElementById('exampleFormControlTextarea1');
        // newText.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Copy the Text", "success");

    }

    const handleRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove Your Extra Space", "success");

    }


    return (
        <div >
            <div class="mx-5 my-5">
                <h1>{props.heading}</h1>
                <textarea className={`form-control bg-${props.mode === 'light' ? 'light' : 'dark'} text-${props.mode === 'light' ? 'dark' : 'light'}`} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                <button className='btn btn-dark my-2 mx-2' disabled={text.length === 0} onClick={handleUpChange} >Convert to Upper Case</button>
                <button className='btn btn-dark my-2 mx-2' disabled={text.length === 0} onClick={handleLoChange}>Convert to Lower Case</button>
                <button className='btn btn-dark my-2 mx-2' disabled={text.length === 0} onClick={handleSpeak}>Speak</button>
                <button className='btn btn-dark my-2 mx-2' disabled={text.length === 0} onClick={handleClear}>Clear</button>
                <button className='btn btn-dark my-2 mx-2' disabled={text.length === 0} onClick={handleCopy}>Copy</button>
                <button className='btn btn-dark my-2 mx-2' disabled={text.length === 0} onClick={handleRemoveSpace}>Remove Extra Space</button>

            </div>

            <div className='container'>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words </p>
                <p>{text.length} Characters </p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Reading Time</p>
                <h3>Preview</h3>
                <p>{text.length>0 ? text : "Nothing to preview !"}</p>


            </div>


        </div>
    )
}
