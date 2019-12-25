import React from "react";
import "./form.css";

function Stu_signup() {
  return (
    <form id="log-in">
      <h2>SIGN UP:</h2>
      <label>Full Name</label>
      <input type="textbox" required />
      <label>Phone No.</label>
      <input type="number" required />
      <label>College Name</label>
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

export default Stu_signup;
