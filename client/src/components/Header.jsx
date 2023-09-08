    import React from 'react';

    function Header({LoginClicked, isLoginClicked}){
        // const [isLoginClicked, setisLoginClicked] = useState(false)
        // const isLoginClicked = true;

        // function handleLoginClick(){
        //     setisLoginClicked(true);
        // }

        return (    <div>
            <header>
            <button>Keeper</button>
            {isLoginClicked ?
             <button>Logout</button>
             : <button onClick={LoginClicked}>Login</button>}
            </header>
        </div>
        );
    }

    export default Header;