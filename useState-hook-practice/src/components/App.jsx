import React, {useState} from "react";

function App() {
  const [time, setTime] = useState("TiME")
  function currentTime(){
    let time = new Date().toLocaleTimeString().replace(/AM|PM/,'') ;
    setTime(time)
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

export default App;
