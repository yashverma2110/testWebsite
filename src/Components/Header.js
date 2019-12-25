import React from "react";

function Header() {
  return (
    <header>
      <h1 id="logo">
        <a href="/">
          quick
          <span>[Silicon]</span>
        </a>
      </h1>
      <nav>
        <a className="btn" href="/login">
          Log In
        </a>
        <a className="btn" href="/signup">
          Sign Up
        </a>
      </nav>
    </header>
  );
}

export default Header;
