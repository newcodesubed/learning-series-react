import React, { useState } from "react";

function App() {
  const[fName,setFName]=useState("");
  const[lName,setLName]=useState("")

  function handleChangeF(event){
    setFName(event.target.value);
  }
  function handleChangeL(event){
    setLName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {fName} {lName} </h1>
      <form>
        <input 
          name="fName"
          placeholder="First Name" 
          onChange={handleChangeF}
          value={fName}
          />
        <input name="lName" 
        placeholder="Last Name" 
        onChange={handleChangeL}
        value={lName}/>
        

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
