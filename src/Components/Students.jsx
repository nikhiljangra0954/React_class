import React from "react";

function Students({name,email}) {
  return (
    <div style={{ backgroundColor: "teal", color: "wheat" }}>
      <h1> Students data</h1>
      <h2>Hello {name}</h2>
      <h2>Email : {email}</h2>
    </div>
  );
}

export default Students;
