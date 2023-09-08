import React, { useState } from "react";
import Login from "./Login";
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import Header from "./Header";
import Footer from "./Footer";

function Home({handleLoginSuccess}){
  const [isLoginClicked, setisLoginClicked] = useState(false);
  function handleLoginClick(){
    setisLoginClicked(true);
}

  // const isLoginClicked = false;

  const iconStyle = {
    height: '26%',
    width: '100%',
    top: '15vh',
    position: 'absolute',
  };

    return isLoginClicked ? <div>
      <Header LoginClicked={handleLoginClick} isLoginClicked={isLoginClicked}/>  
      <Login onLoginSuccess={handleLoginSuccess}/>
      <Footer />
      </div> : <div> <Header LoginClicked={handleLoginClick} isLoginClicked={isLoginClicked}/>
        <div className="home">
       
          <StickyNote2Icon style= {iconStyle}/>
          <h1>Keeper</h1>
          <p className="homeContent">Keep your notes safe and secure</p>
        
        </div><Footer />
        </div>

} 

export default Home;