import React, { useState } from "react";

function Login({onLoginSuccess}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [isSubmitClicked , setSubmitClicked] = useState(false);

    // const isSubmitClicked = true;
  
    function handleEmailChange(e){
      setEmail(e.target.value);
    };
  
    function handlePasswordChange(e){
      setPassword(e.target.value);
    };

    function handleLogin(e){    
        e.preventDefault();
        onLoginSuccess();
    }



    return(
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
    <button onClick={handleLogin} type="submit">Submit</button>
  </div>
        {/* <div id="alternativeLogin">
     <label >Or sign in with:</label>
     </div> */}
     </form>
    </div>)
}

export default Login;