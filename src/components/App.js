import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getRecipes, getIngredients } from "../api";
import { getToken } from "../auth";
import { Register, Login, Navbar, List } from "./";
import ListMaker from "./ListMaker";

import SingleRecipe from "./SingleRecipe";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [allRecipes, setAllRecipes] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);
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

  const handleIngredients = async () => {
    const data = await getIngredients();
    setAllIngredients(data);
    console.log(data, "from ingredients handler");
  };

  useEffect(() => {
    handleRecipes();
    isUserLoggedIn();
    handleIngredients();
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
          <ListMaker allRecipes={allRecipes} allIngredients={allIngredients} />
        </Route>
        <Route path="/single-product/:id">
          {/* <SingleRecipe allRecipes={allRecipes} /> */}
        </Route>
      </div>
    </Router>
  );
};

export default App;
