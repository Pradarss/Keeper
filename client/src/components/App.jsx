// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import CreateArea from './CreateArea';
import Home from './Home';
import Login from './Login';

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [UserData, setUserData] = useState(null);

  useEffect(() => {

    // fetch('/user-data', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => {
    //     if (response.status === 200) {
    //       return response.json();
    //     } else {
    //       throw new Error('Failed to fetch user data');
    //     }
    //   })
    //   .then((data) => {
    //     setUserData(data); // Assuming the user data contains _id
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching user data:', error);
    //   });

    fetch('/notes')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setNotes(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  function addNote(newNote) {
    fetch('http://localhost:5000/notes', {
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
    fetch(`http://localhost:5000/notes/${id}`, {
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

  function handleLogin(){
    setIsLoggedIn(true);
  }

  function handleLogout(){
    setIsLoggedIn(true);
  }

  return (
    <Router>
      <div>
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout}/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login onLoginSuccess={handleLogin}/>} />
          <Route
            path="/notes"
            element ={
              <div>
                <CreateArea onAdd={addNote} />
                {notes.map((note) => (
                  <Note
                    id={note._id}
                    key={note._id}
                    title={note.title}
                    content={note.content}
                    // user={UserData._id}/
                    onDelete={deleteNote}
                  />
                ))}
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
