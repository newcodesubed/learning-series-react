import React, { useState } from "react";

function List(props){
  const [strick,setstrick]=useState(false);
  const styleSheet = {
    textDecorationLine: strick ? 'line-through' : null
  }
  function clickHandler(){
    setstrick(()=>{
      if(!strick){
        return true;
      }else if (strick){
        return false;
      }
    });
  }

    return( 
      <div>
        <li onClick={clickHandler} style={styleSheet}>{props.text}</li> 
      </div>
             
    );
}
export default List;