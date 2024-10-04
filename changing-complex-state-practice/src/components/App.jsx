import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const [fContact,setFContact]= useState({
    fName: "",
    lName: "",
    email: ""
  });
  

  function handleChange(event){
    
  const {value, name} = event.target;

    setContact(preValue=>{
      if(name === "fName"){
        return{
        fName:value,
        lName:preValue.lName,
        email:preValue.email
        };
      }else if (name === "lName") {
        return{
          fName : preValue.fName,
          lName : value,
          email : preValue.email
        };
      }else if (name === "email"){
        return{
          fName :preValue.fName,
          lName : preValue.lName,
          email : value

        };
      }
      
    });

  }

  function submitHandler(event){
    setFContact(contact);

    event.preventDefault();

  }

  return (
    <div className="container">
      <h1>
        Hello {fContact.fName} {fContact.lName}
      </h1>
      <p>{fContact.email}</p>
      <form onSubmit={submitHandler}>
        <input name="fName" placeholder="First Name" onChange={handleChange} value={contact.fName} />
        <input name="lName" placeholder="Last Name" onChange={handleChange} value={contact.lName} />
        <input name="email" placeholder="Email" onChange={handleChange} value={contact.email} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
