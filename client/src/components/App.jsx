import React, {  useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Notes from './Notes';
import Logout from './Logout';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  function handleLogin(){
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  }

  function handleLogout(){
    fetch('/logout')
    .then(response => {
      if (response.ok) {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false'); 
        console.log("logout successful");
      } else {
        console.error('Logout failed');
      }
    })
    .catch(error => {
      console.error('Error during logout:', error);
    });
  }

  return (
    <Router>
      <div>
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout}/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login onLoginSuccess={handleLogin}/>} />
          <Route path="/notes/:userId" element={<Notes />} />
          <Route path="/logout" element={<Logout />}  />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
