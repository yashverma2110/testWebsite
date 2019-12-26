import React from "react";
import { HashRouter, Link } from "react-router-dom";
import "./tile.css";

function Tile() {
  return (
    <div className="tile">
      <HashRouter>
        <h3>New Here? Start Hiring!!</h3>
        <Link className="btn" to="/company/signup">
          Sign Up
        </Link>
        <h3>Already have an account:</h3>
        <Link className="btn" to="/company/login">
          Log In
        </Link>
      </HashRouter>
    </div>
  );
}

export default Tile;
