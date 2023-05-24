import React, { useState } from "react";

function FormHandle() {
  const [name, setName] = useState("");
  const [sett ,setsett] = useState("");
  const [check, setCheck] = useState(false);

  function getformdata(e) {
    console.log(sett,name,check);
    e.preventDefault();
  }

  return (
    <div>
      <h2>Form Handdling</h2>
      <form onSubmit={getformdata} action="">
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e)=>{setName(e.target.value)}}
        />{" "}
        <br /> <br />
        <select
          onChange={(e) => {
            setsett(e.target.value);
          }}
        >
          <option value="select">Select</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>{" "}
        <br /> <br />
        <input
          type="checkbox"
          onChange={(e)=>{setCheck(e.target.checked)}}
        />{" "}
        <span>Term and Conditions applied</span> <br />
        <input type="submit"/>
      </form>
    </div>
  );
}

export default FormHandle;
