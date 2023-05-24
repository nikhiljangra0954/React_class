import React, { useState } from 'react'

const Cliker = () => {
    const [click, setClick ] = useState(0)

    function updateclick(){
        setClick(click+1)
    }


  return (
    <div>
        <h1>{click}</h1>
        <button onClick={updateclick}>click</button>
    </div>
  )
}

export default Cliker