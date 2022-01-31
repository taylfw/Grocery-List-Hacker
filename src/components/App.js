import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  getRecipes,
  getIngredients,
  getHistoricalLists,
  getUserByUsername,
} from "../api";
import { getToken, getUser } from "../auth";
import { Register, Login, Navbar, List, Home, SingleHistoryList } from "./";
import CurrentList from "./CurrentList";
import ListMaker from "./ListMaker";

import SingleRecipe from "./SingleRecipe";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [allRecipes, setAllRecipes] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);
  const [list, setList] = useState([]);
  const [listHistory, setListHistory] = useState([]);
  const [userId, setUserId] = useState(0);
  const [active, setActive] = useState(false);

  function isUserLoggedIn() {
    const token = getToken();

    if (token) {
      setLoggedIn(true);
    }
  }
  const username = getUser();

  const handleRecipes = async () => {
    const data = await getRecipes();
    setAllRecipes(data);
  };

  const handleUser = async () => {
    const user = await getUserByUsername(username);
    setUserId(user.id);
  };

  const handleIngredients = async () => {
    const data = await getIngredients();
    setAllIngredients(data);
  };

  const handleHistory = async () => {
    const oldLists = await getHistoricalLists(userId);
    setListHistory(oldLists);
  };

  useEffect(() => {
    handleUser();
  }, []);

  useEffect(() => {
    handleRecipes();
    isUserLoggedIn();
    handleIngredients();
  }, []);

  useEffect(() => {
    handleHistory();
  }, [userId]);

  return (
    <Router>
      <div className="App">
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/register">
          <Register setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/my-info">
          <CurrentList list={list} setList={setList} user={username} />
        </Route>

        <Route path="/history/:id">
          <SingleHistoryList list={list} setList={setList} user={username} />
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
