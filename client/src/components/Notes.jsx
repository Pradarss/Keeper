import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import CreateArea from "./CreateArea";
import Noteblock from './Noteblock';

function Notes(){
const [notes, setNotes] = useState([]);
const {userId} = useParams();

useEffect(() => {
    fetch(`/notes/${userId}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setNotes(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [userId]);

  function addNote(newNote) {
    fetch('https://keeperserver.onrender.com/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setNotes((prevNotes) => [...prevNotes, newNote]);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  function deleteNote(id) {
    fetch(`https://keeperserver.onrender.com/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    })
      .then(function (response) {
        if (response.ok) {
          setNotes((prevNotes) =>
            prevNotes.filter((note) => note._id !== id)
          );
        } else {
          console.log('Failed to delete note');
          alert("not deleted");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }

return (
    <div>
      <CreateArea onAdd={addNote} />
      {notes.map(note => (
        <Noteblock
          id={note._id}
          key={note._id}
          title={note.title}
          content={note.content}
          user={note.userId}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
}

export default Notes;