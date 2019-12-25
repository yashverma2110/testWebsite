import React from "react";
import "./form.css";

function Com_signup() {
  return (
    <form id="log-in">
      <h2>SIGN UP:</h2>
      <label>Company Name</label>
      <input type="textbox" required />
      <label>Username</label>
      <input type="textbox" required />
      <label>Email</label>
      <input type="textbox" required />
      <label>Password</label>
      <input type="password" required />
      <label>Confirm Password</label>
      <input type="textbox" required />
      <button>Submit</button>
    </form>
  );
}

export default Com_signup;
