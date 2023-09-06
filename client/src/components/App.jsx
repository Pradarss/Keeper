import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import CreateArea from "./CreateArea";
// import Home from "./Home";

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  // function handleLoginSuccess(){
  //   setIsLoggedIn('false')
  // }

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
    console.log("Deleting note with ID:", id); 
    fetch(`http://localhost:5000/notes/${id}`,{
      method: "DELETE",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({ id: id }),
    })
    .then(function(response){
      console.log("Response status:", response.status);
      if(response.ok){
        setNotes((prevNotes) =>
          prevNotes.filter((note) => note._id !== id)
        );
        console.log("Successfully deleted")
      }
      else{
        console.log("failed to delete node");
      }
    })
    .catch(function(err){
      console.log(err);
    })
  }

  return (
    isLoggedIn?<div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note) => (
        <Note
          id={note._id}
          key = {note._id}
          title={note.title}
          content={note.content}
          onDelete = {deleteNote}
        />
      ))}
      <Footer />
    </div> : <div>
      <Header />
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;