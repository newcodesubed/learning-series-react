import React, { useState } from "react";

function App() {
  const [writen, setWriten]= useState("");
  //useState lai array ma ni lekhna milxa this is how
  const[showItem,setShow]=useState([]);

  function clickHandler(){
    //im keeping every element in the array of usestate with its previous value and new value which i have map bellow line 36
    setShow(preValue=>{
      return [...preValue,writen]
    });
    //add gare paxi placeholde empty hoss
    setWriten("");


  }

  function changeHandler(event){
    const toDoItem = event.target.value;
    setWriten(toDoItem);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={changeHandler} value={writen}/>
        <button type="submit" onClick={clickHandler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {showItem.map((toDoitem, index) => {
          //index pass garerw im giving the key automatically  with the index of each item in the array as the key
        return <li key={index}>{toDoitem}</li>;
        })}

        </ul>
      </div>
    </div>
  );
}

export default App;
