import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getRecipes, getIngredients } from "../api";
import { getToken } from "../auth";
import { Register, Login, Navbar, List, Home } from "./";
import CurrentList from "./CurrentList";
import ListMaker from "./ListMaker";

import SingleRecipe from "./SingleRecipe";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [allRecipes, setAllRecipes] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);
  const [list, setList] = useState([]);
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
  };

  useEffect(() => {
    handleRecipes();
    isUserLoggedIn();
    handleIngredients();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/my-info">
          <CurrentList list={list} setList={setList} />
        </Route>
        <Route path="/list-maker">
          <ListMaker allRecipes={allRecipes} allIngredients={allIngredients} />
        </Route>
        <Route path="/single-recipe/:id">
          <SingleRecipe
            allRecipes={allRecipes}
            allIngredients={allIngredients}
            list={list}
            setList={setList}
          />
        </Route>
      </div>
    </Router>
  );
};

export default App;
