import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { useLocation } from "react-router-dom";

function CreateArea({onAdd}) {

  const location = useLocation();
  const userData = location.state.userData;

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
    autoResize(event.target);
  }

  function addNote(event) {
    event.preventDefault();
    if (newNote.title && newNote.content) {
      const userId = userData ? userData.user.key: ''; 
    const noteWithUserId = {
      ...newNote,
      userId: userId
    };
    onAdd(noteWithUserId);
      setNewNote({
        title: "",
        content: "",
      });
    }
  }

  function expand() {
    setExpanded(true);
  }

  function autoResize(element) {
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
  }

  function handleBlur() {
    setExpanded(false);
    autoResize(document.querySelector('textarea[name="content"]'));
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  function handleOutsideClick(event) {
    const createAreaDiv = document.querySelector('.createarea');
    if (createAreaDiv && !createAreaDiv.contains(event.target)) {
      setExpanded(false);
      autoResize(document.querySelector('textarea[name="content"]'));
    }
  }

  return (
    <div className="createarea">
      <form className="create-note">
      {isExpanded && (<input name="title" onChange={handleChange} value={newNote.title} placeholder="Title" />)}
        <textarea name="content" placeholder="Take a note..." rows={isExpanded? "3" : "1"} onClick={expand} onChange={handleChange} value={newNote.content}/>
        <Zoom in={isExpanded}><Fab onClick={addNote} onBlur={handleBlur}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;