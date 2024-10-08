import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";




function App() {
  const [notes,setNotes] =useState([]);
  //note is passed from create note in addNOte
  function addNote(note){
    setNotes(prevNotes =>{
      return[...prevNotes, note];
    })

  }
  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index)=>{
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea 
       onAdd={addNote}
       />
       {/* noteItem is the element in notes array */}
       {notes.map((noteItem, index) =>{
        return <Note 
          key={index}
          id={index}
          onDelete={deleteNote} 
          title={noteItem.title} 
          content={noteItem.content} 
        />
       })}
      
      <Footer />
    </div>
  );
}

export default App;
