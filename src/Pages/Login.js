import React from "react";
import Password from "./Password";
import "./form.css";

function Login() {
  return (
    <form id="log-in">
      <h2>LOG IN:</h2>
      <label>Email or Username</label>
      <input type="textbox" required />
      <Password />
      <button>Submit</button>
    </form>
  );
}

export default Login;
