import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea({onAdd}) {

  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  }

  function addNote(event) {
    event.preventDefault();
    if (newNote.title && newNote.content) {
      onAdd(newNote);
      setNewNote({
        title: "",
        content: ""
      });
    }
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
      {isExpanded && (<input name="title" onChange={handleChange} value={newNote.title} placeholder="Title" />)}
        <textarea name="content" placeholder="Take a note..." rows={isExpanded? "3" : "1"} onClick={expand} onChange={handleChange} value={newNote.content}/>
        <Zoom in={isExpanded}><Fab onClick={addNote}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;