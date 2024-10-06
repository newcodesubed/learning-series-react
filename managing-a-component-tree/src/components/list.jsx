import React  from "react";

function List(props){

    return( 
      //on click matra activate hunxa yo even hunna trigger hunnu paryo 
      <div onClick={()=>{
        props.onChecked(props.id);
      }}>
        <li >{props.text}</li> 
      </div>
             
    );
}
export default List;