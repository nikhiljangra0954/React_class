import React, { useState } from 'react'

function Toggel() {
    const [status, setstatus] = useState(true)
  return (
    <div>
        <button onClick={()=>{setstatus(!status)}}>Toggel</button>
        {
            status ? <h2>Hello Nikhil</h2> : null
        }
        <h1>Toggel Class</h1>
        {/* <button onClick={()=>{setstatus(false)}} >Hide</button> <button onClick={()=>{setstatus(true)}}>Show</button> */}
    </div>
  )
}

export default Toggel