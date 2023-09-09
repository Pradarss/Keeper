// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header({isLoggedIn}) {
  return (
    <div>
      <header>
        <Link className='title' to="/">Keeper</Link>
        {isLoggedIn? <Link className='title' to="/logout">Logout</Link> : <Link className='title' to="/login">Login</Link>}
      </header>
    </div>
  );
}

export default Header;
