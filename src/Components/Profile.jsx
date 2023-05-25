import React, { useState } from "react";

function Profile() {
  const [Login, setLogin] = useState(false);
  return (
    <div>
      <h2>Hi There</h2>
      {Login ? <h1>Welcome Nikhil</h1> : <h1>Hey User</h1>}
      <button
        onClick={() => {
          setLogin(!Login);
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Profile;
