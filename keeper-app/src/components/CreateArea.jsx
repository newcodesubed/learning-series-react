import React, {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange (event){
    const {value, name} = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]:value
      };
      // if(name === "title"){
      //   return {
      //   title: value,
      //   content: prevNote.content
      //   };
      //   }else if(name === "content"){
      //     return {
      //       title: prevNote.title,
      //       content: value
      //   };
      // }
    });
  }
  function submitHandler(event){
    //note is passed to app
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  
  return (
    <div>
      <form >
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button
        onClick={submitHandler} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
