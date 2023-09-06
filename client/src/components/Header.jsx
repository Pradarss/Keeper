    import React, { useState } from 'react';
    import Home from "./Home";

    function Header(){
        const [isLoginClicked, setIsLoginClicked] = useState(true);

        function handleLoginClick() {
        setIsLoginClicked(false);
        }

        function handleTitleClick(){
            setIsLoginClicked(true);
        }

        return (    <div>
            <header>
            <button onClick={handleTitleClick}>Keeper</button>
            {isLoginClicked ? (
                <button onClick={handleLoginClick}>Login</button>
            ) : null}
            </header>
            <Home isLoginClicked={isLoginClicked} />
        </div>
        );
    }

    export default Header;