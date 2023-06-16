import React, { useState } from 'react'

export default function Textform(props) {

const handleUpClick =  ()=>{
console.log("Uppercase was click"+ text);
let newtext=text.toUpperCase();

settext(newtext );
props.showAlert("Convert to upperCase ","success");
}
    
const handleClearText =  ()=>{
  
  let newtext="";
  
  settext(newtext);
  }


const handlelowerClick =  ()=>{
    console.log("Lowercase was click"+ text);
    let newtext=text.toLowerCase();
    
    settext(newtext );
    props.showAlert("Convert to LowerCase ","success");
    }
const handleOnChange =  (event)=>{
    console.log("handleOnChange was click");
    settext(event.target.value);
    }


    const handleOnCopy =  ()=>{
      var text= document.getElementById("box");
      text.select();
      navigator.clipboard.writeText(text.value);
      
      }
const handleExtraSpace= () =>{

  let newtext=text.split(/[ ]+/);
  settext(newtext.join(" "))
}


     
const[text, settext]=useState('')
// text="new text";//wrong way to change the state
//settext=("new text");//correct way to change the state

  return (
    <>
    <div>
      <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} id="box" rows="8"></textarea>
</div>

<button className="btn btn-primary mx-1 " onClick={handleUpClick}>Convert to UpperCase</button>


<button className="btn btn-primary mx-1 "  onClick={handlelowerClick}>Convert to LowerCase</button>

<button className="btn btn-primary mx-1 "  onClick={handleOnCopy}>Copy</button>

<button className="btn btn-primary mx-1 "  onClick={handleExtraSpace}>Remove Extra Spaces</button>

<button className="btn btn-primary mx-1 " onClick={handleClearText}>Clear Text</button>

    </div>
    


    <div className="container ">
        <h1>Your Text summary </h1>
        <p>Number of  words :- {text.split(" ").length} </p>
        <p>character length is :- {text.length} </p>
        <p>{0.008*text.split(" ").length} minutes read</p>

        <h2>Preview</h2>


        <p> {text} </p>
        </div> 
</>  )
}
