import React, { useState } from "react";

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    function handleEmailChange(e){
      setEmail(e.target.value);
    };
  
    function handlePasswordChange(e){
      setPassword(e.target.value);
    };

    function handleLogin(e){    
        e.preventDefault();
    }



    return (
    <div id="loginform">
        <h2 id="headerTitle">Login/SignUp</h2>
        <form onSubmit={handleLogin}>
    <div className="row">
    <label>Email</label>
    <input  value={email} onChange={handleEmailChange} type="text" placeholder="Enter your email" required/>
    </div>
    <div className="row">
    <label>Password</label>
    <input value={password} onChange={handlePasswordChange} type="password" placeholder="Enter your password" required/>
  </div>
    <div id="button" className="row">
    <button  type="submit">Submit</button>
  </div>
        {/* <div id="alternativeLogin">
     <label >Or sign in with:</label>
     </div> */}
     </form>
    </div>
      )
}

export default Login;