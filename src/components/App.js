import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getRecipes } from "../api";
import { getToken } from "../auth";
import { Register, Login, Navbar, List } from "./";
import ListMaker from "./ListMaker";

import SingleRecipe from "./SingleRecipe";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [allRecipes, setAllRecipes] = useState([]);
  function isUserLoggedIn() {
    const token = getToken();

    if (token) {
      setLoggedIn(true);
    }
  }

  const handleRecipes = async () => {
    const data = await getRecipes();
    setAllRecipes(data);
  };

  useEffect(() => {
    handleRecipes();
    isUserLoggedIn();
    console.log(allRecipes, "From UseEf");
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
        <Route path="/list-maker">
          <ListMaker allRecipes={allRecipes} />
        </Route>
        <Route path="/single-product/:id">
          {/* <SingleRecipe allRecipes={allRecipes} /> */}
        </Route>
      </div>
    </Router>
  );
};

export default App;
