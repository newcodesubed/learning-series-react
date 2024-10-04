import React from "react";
import { useState } from "react";

function App() {
  const[name, setName]= useState("");
  //this new state is going to keep tract of final value submitted 
  const[printName, setPrintName]=useState("");
  //event is the happening of any change in the field in this case the name field
  function handleInput(event){
    //this console wil show the element that i will type event=what caused(type) /target=in what field(where)/ value= what happened (k bhayo ta?)
    console.log(event.target.value);

    setName(event.target.value);
    
  }
  //after click what must be done?
  function submitHandler(event){
    //name is an standar "COntrolled Components" 
    setPrintName(name);
//to remove the default feature of form to refreh every time it submit.
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {printName} </h1>
      <form onSubmit={submitHandler}>
      <input 
        type="text" 
        placeholder="What's your name?"
        onChange={handleInput}
        value={name}
      />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
