import React,{ useState } from 'react'
import About from './Components/About'
import Navbar from './Components/Navbar'
import TextArea from './Components/TextArea'
import Alert from './Components/Alert'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";







export default function App() {
  const [mode,setmode] =  useState('light')  
  const [alert,setalert] =  useState(null);
  const showalert = (message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
// setInterval(() => {
//   document.title = "TextUtils - Home"
// },5000 );
// setInterval(() => {
//   document.title = "Install Now"
// }, 2000);

 

  const togglemode = () =>{

    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = "#6c757d";
      showalert("Dark Mode Enabled","success")
      document.title = "TextUtils-DarkMode"
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = "white";
      showalert("Light Mode Enabled","success")
      document.title = "TextUtils-LightMode"
    }
  }
  return (
   <>
   <Router>

        <Navbar title ="TextUtils-X" About ="About" mode={mode} togglemode = {togglemode} /> 
        <Alert alert ={alert}/>
         {/* <Navbar/> */}
        <div className ="container my-3">
        <Switch>
          <Route  path="/about">
            <About />
          </Route>
          <Route  path="/">
        <TextArea Heading = "Enter Any text to analyze" mode ={mode} showalert = {showalert}/>
          </Route>
        {/* <About/> */}
        </Switch>
        </div>
   </Router>
    
   

      </>
    
  );
}

