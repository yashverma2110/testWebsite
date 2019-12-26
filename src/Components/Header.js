import React from "react";
import { HashRouter, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <HashRouter>
        <h1 id="logo">
          <Link to="/">
            quick
            <span>[Silicon]</span>
          </Link>
        </h1>
        <nav>
          <Link className="btn" to="/login">
            Log In
          </Link>
          <Link className="btn" to="/signup">
            Sign Up
          </Link>
        </nav>
      </HashRouter>
    </header>
  );
}

export default Header;
