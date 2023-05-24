import React, { useState } from 'react'

function Studentinput() {
    const [name , setName] = useState("")
    const [print , setPrint] = useState(false)
    function getdata(e){
        setName(e.target.value)
        setPrint(false)
    }
  return (
    <div>
        <h1>Student Input Field Geting with OnChange and OnClick</h1>
        <input type="text" onChange={getdata} /> <button onClick={()=>{setPrint(true)}}>Submit</button>
        <h3>{print ? name : ""}</h3>
    </div>
  )
}

export default Studentinput