
import { useState } from 'react';
import './App.css';
import About from './componets/About';
import Navbar from './componets/Navbar';
import Textform from './componets/Textform';
import Alert from './componets/Alert';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  //states
  const [mode,setMode]= useState('light');// whether dark mode is enable or not

// states
  const [alert,setalert]= useState(null);


  const showAlert= (message , type)=>{

setalert({
  msg:message,
  type:type
})
setTimeout(() => {
  setalert(null)
}, 1000);
  }



// arrow function

  const toggleMode = () =>{
    if(mode=== 'light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';

showAlert("Dark  Mode has been enabled","success");

    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light  Mode has been enabled","success");
    }
  }
  return (

<>

<Router>
<Navbar  titles="RAHUL"  mode={mode} toggleMode={toggleMode}/> 
<Alert alert={alert}/>


<div className="container my-3">
         <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/"> 
          <Textform  showAlert={showAlert} heading="Enter the text to analyze below"
            mode={mode}/>
          </Route>
        </Switch>
      
</div>
</Router>
</>
  );
}
 
export default App;
