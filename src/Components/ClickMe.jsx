import React from 'react'
// This click me to use click me event when we click on button

/*
we can not call the function on the onCLick event in button with clickme() instead use only "Clickme"
*/
function ClickMe() {
    function clickme(){
        alert("Thanks for clicking")
    }
  return (
    <button onClick={clickme}>Click Me</button>
  )
}

export default ClickMe