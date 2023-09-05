import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(()=>{
    fetch('/notes')
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      setNotes(data);
    })
    .catch(function(err){
      console.log(err);
    })
  }, []);

  function addNote(newNote){
    fetch("http://localhost:5000/notes",{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newNote)
    })
    .then(function(response){
      response.json();
    })
    .then(function(data){
      // console.log(data);
      setNotes((prevNotes)=>[...prevNotes, newNote]);
    })
    .catch(function(err){
      console.log(err);
    })
  }

  function deleteNote(id){
    // setNotes(prevNote =>{
    //   return prevNote.filter((note, index) =>{
    //     return index !== id;
    //   })
    // })
    fetch("http://localhost:5000/notes",{
      method: "DELETE",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(id.title)
    })
    .then(function(response){
      response.json();
    })
    .catch(function(err){
      console.log(err);
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key = {index}
          id = {index}
          title={note.title}
          content={note.content}
          onDelete = {deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;