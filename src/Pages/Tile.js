import React from "react";
import "./tile.css";

function Tile() {
  return (
    <div className="tile">
      <h3>New Here? Start Hiring!!</h3>
      <a className="btn" href="/company/signup">
        Sign Up
      </a>
      <h3>Already have an account:</h3>
      <a className="btn" href="/company/login">
        Log In
      </a>
    </div>
  );
}

export default Tile;
