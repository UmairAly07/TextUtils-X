import React,{useState} from 'react'

export default function TextArea(props) {
  const [text, setText] = useState("");
  const ToUpperCase = () =>{
    // console.log("Upper case was clicked")
    let newText = text.toUpperCase();
    setText(newText)
 props.showalert("Converted to UpperCase","success")
  }
  const ToLowerCase = () =>{
    // console.log("Upper case was clicked")
    let newText = text.toLowerCase();
    setText(newText)
   props.showalert("Converted to LowerCase","success")
  }
  const Capitalize = () =>{
    // console.log("Upper case was clicked")
    let newText = text.charAt(0).toUpperCase()+text.substring(1);;
    setText(newText)
   props.showalert("First Character is Capatilized","success")
  }
  const ToResetCase = () =>{
    let newText ="";
    setText(newText)
   props.showalert("All Text Reset","success")
  }
  const HandleOnChange = (event) =>{
    // console.log("On Change");
    setText(event.target.value);
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showalert("Speaker Enabled","success")

  }
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain"
      
    });
    props.showalert("Downloading TextFile.....Please wait for 5 seconds","success")
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
}
  
  return (
    <>
    <div className="container">
<div className="mb-3">
    <h1>{props.Heading}</h1>
  <textarea className="form-control" id="MyBox" value ={text} rows="8" onChange={HandleOnChange} placeholder ="Enter your Text Here"></textarea>
</div>
<button className="btn btn-success" onClick={ToUpperCase}>Convert to upperCase</button>
<button className="btn btn-success mx-2 my-2" onClick={ToLowerCase}>Convert to LowerCase</button>
<button className="btn btn-success mx-2 my-2" onClick={Capitalize}>Capitalize</button>
<button type="submit" onClick={speak} className="btn btn-success mx-2 my-2 ">Speak</button>
<button className="btn btn-success mx-2 my-2" onClick={ToResetCase}>Reset</button>
<button className='btn btn-success mx-2 my-2' onClick={downloadTxtFile}>Download Text</button>


    </div>
    <div className="container my-3">
      <h2>Your Text Summary:</h2>
      <p>Words {text.split(" ").length} & Characters {text.length}</p>
      <h3>Time Computation</h3>
      <p>You can read it in {0.008*text.split(" ").length}</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter Any Text to Preview here..."}</p>
    </div>
    </>
  )
  }

