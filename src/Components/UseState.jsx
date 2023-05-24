import React, { useState } from 'react'
//  Trying Use State to update variable on Dom  
const UseState = () => {
    // let name = "Nikhil"
  let [name ,setName] = useState("Nikhil")
//   setName = "nik"
function updatedata(){
    setName("Nikhil Kumar")
}
    return (
    <>
    <div>UseState</div>
    <h1>Hi {name}</h1>
    <button onClick={updatedata}>Full Name</button>
    </>
  )
}

export default UseState