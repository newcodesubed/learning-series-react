import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText]= useState("HELLO");
  const [mouseOver, setMouseOver]= useState(false);
  function clickHandler(){
    setHeadingText("submitted");
    
  }
  function hoverHandler(){
    setMouseOver(true);
    
  }
  function mouseOutHandler(){
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor:mouseOver ? "black" : "white"}} 
      onClick={clickHandler} 
      onMouseOver={hoverHandler}
      onMouseOut={mouseOutHandler}>Submit</button>
    </div>
  );
}

export default App;
