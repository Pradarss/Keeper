import React from "react";

function Login(){
    let isSignedUp = false;

    return isSignedUp? <div className="Login">
        <form>
            <h1>Login</h1>
        </form>
    </div> : <div className="SignUp">
        <form>
        </form>
    </div>
}

export default Login;