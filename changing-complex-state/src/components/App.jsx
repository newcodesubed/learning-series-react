import React, { useState } from "react";

function App() {
  // const[fName,setFName]=useState("");
  // const[lName,setLName]=useState("");
  const [fullName, setFullName]=useState({fName:"",lName:""});

  function handleChange(event){
    // const newValue = event.target.value;
    // const kMaHalekoName = event.target.name;
//sano banauna milxa with destructuring 
    const {value, name} = event.target;

    setFullName(prevValue =>{
      if (name === "fName"){
        return {
          fName:value,
          lName:prevValue.lName
        };
      }else if (name === "lName"){
       //object bayer format ni object ko xa
        return {
          fName:prevValue.fName,
          lName:value
        };
      }
    });
  }
  

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName} </h1>
      <form>
        <input 
          name="fName"
          placeholder="First Name" 
          onChange={handleChange}
          value={fullName.fName}
          />
        <input name="lName" 
        placeholder="Last Name" 
        onChange={handleChange}
        value={fullName.lName}
        />
        

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
