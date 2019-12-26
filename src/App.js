import React from "react";
import Login from "./Pages/Login";
import Stu_signup from "./Pages/Student-signup";
import Com_signup from "./Pages/Company-signup";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <section id="center">
        <HashRouter basename="/">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/signup" component={Stu_signup} exact />
            <Route path="/company/login" component={Login} exact />
            <Route path="/company/signup" component={Com_signup} exact />
          </Switch>
        </HashRouter>
      </section>
    </div>
  );
}

export default App;
