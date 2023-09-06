import React, { useState } from 'react';
// import HighlightIcon from "@mui/icons-material/Highlight";
// import Login from "./Login";
import Home from "./Home";

function Header(){
    const [isLoginClicked, setIsLoginClicked] = useState(true);

    function handleLoginClick() {
      setIsLoginClicked(false);
    }

    return (isLoginClicked? <div>
        <header>
            <h1>Keeper</h1>
            <button onClick={handleLoginClick}>Login</button>
        </header>
        <Home isLoginClicked={isLoginClicked} />
    </div> : <div>
        <header>
        <h1>Keeper</h1>
        </header>
        <Home isLoginClicked={isLoginClicked} />
    </div>
    );
}

export default Header;