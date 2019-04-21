import React from "react";
import "./Wrapper.css";

function Wrapper() {
    return (
      <div className="wrapper" >
      <h1 className="lace">LACE</h1>
      <div className="buttons">
      <a className="login" href="/login">Login</a>
      <a className="signup" href="/signup">Sign Up</a>
      </div>
      </div>
    );
  }  

export default Wrapper;