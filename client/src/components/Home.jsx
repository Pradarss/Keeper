import React from "react";
import Login from "./Login";

function Home({isLoginClicked}){
    return isLoginClicked ? (
        <div className="home">
          <h1>Keeper</h1>
          <p>Keep your notes safe and secure</p>
        </div>
      ) : <Login />;
} 

export default Home;