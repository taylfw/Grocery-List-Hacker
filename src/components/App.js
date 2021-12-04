import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getToken } from "../auth";
import { Register, Login, Navbar } from "./";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  function isUserLoggedIn() {
    const token = getToken();

    if (token) {
      setLoggedIn(true);
    }
  }
  useEffect(() => {
    isUserLoggedIn();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/my-info"></Route>
      </div>
    </Router>
  );
};

export default App;
