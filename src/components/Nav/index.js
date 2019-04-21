import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Lace
      </a>
      <div className="nav navbar-nav">
        <a className="navlogin" href="/login">Login</a>
        <a className="navsignup" href="/signup">Sign Up</a>
      </div>
    </nav>
  );
}

export default Nav;