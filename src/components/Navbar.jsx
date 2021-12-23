import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Login, Register } from ".";
import { getUser } from "../auth";
import { getUserByUsername } from "../api";
import { Title } from ".";
import "./Navbar.css";
const Navbar = ({ loggedIn, setLoggedIn }) => {
  const [logToggle, setLogToggle] = useState(false);
  const [registerToggle, setRegisterToggle] = useState(false);

  const user = getUser();

  return (
    <div className="header-container">
      {loggedIn ? (
        <>
          <div className="login-container">
            <NavLink className="nav-button" to="/">
              Home
            </NavLink>
          </div>
          <div className="login-container">
            <NavLink className="nav-button" to="/list-maker">
              Recipes/Ingredients
            </NavLink>
          </div>
          <Title />
          <div className="login-container">
            <NavLink
              className="nav-button"
              to="/my-info"
            >{`${user}'s Lists`}</NavLink>
          </div>
          <div className="login-container">
            <NavLink
              className="nav-button"
              to="/"
              onClick={() => {
                localStorage.clear();
                setLoggedIn(false);
              }}
            >
              Log Out
            </NavLink>
          </div>
        </>
      ) : (
        <>
          <div className="login-container">
            <NavLink className="nav-button" to="/">
              Home
            </NavLink>
          </div>

          <Title />
          <div className="login-container">
            <NavLink className="nav-button" to="/login">
              Login
            </NavLink>
          </div>
          <div className="login-container">
            <NavLink className="nav-button" to="/register">
              Register
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
