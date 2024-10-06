import React, { useState } from "react";
import List from "./list";


function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id){
    setItems(prevItems=>{
      return prevItems.filter(
        (items, index)=> {
          return index !== id;
        }
      )

    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
      {/* item baneko array [] ma bako item ho so teslai cahi maap garnu parne ho */}
      {/* deleteItem banneko kura maile main ma create gareko chu so teslai maile
      aba list banne component ma pass garerw activate garaudai chu  */}
          {items.map((toDoItem, index) => (
            <List 
            //when passing props you must send data in {}
            key={index}
            id = {index}
            text={toDoItem} 
            onChecked={deleteItem}
            
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
