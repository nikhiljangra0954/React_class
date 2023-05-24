import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './Components/User';
import ClickMe from './Components/ClickMe';
import UseState from './Components/UseState';
import Cliker from './Components/Cliker';
import Students from './Components/Students';
import Studentinput from './Components/Studentinput';
import Toggel from './Components/Toggel';
import FormHandle from './Components/FormHandle';
function App() {
  
  const [name, setName] = useState("Nikhil")
  return (
    <div className="App">
     {/* <h1>Hello World</h1> */}
     {/* <User /> */}
     {/* <ClickMe /> */}
     {/* <UseState /> */}
     {/* <Cliker /> */}
     {/* <Students name={name} email={"test@gmail.com"}/> */}
     {/* <button onClick={()=>{setName("Ajay")}}>Change Name</button> */}
     {/* <Studentinput /> */}
     {/* <Toggel /> */}
     <FormHandle />
    </div>
  );
}

export default App;
