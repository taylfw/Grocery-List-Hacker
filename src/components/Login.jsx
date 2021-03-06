import React, { useState } from "react";
import "./Login.css";
import { loginUser } from "../api";
import { storeToken, storeUser } from "../auth";
import { useHistory } from "react-router-dom";

const Login = ({ setLoggedIn }) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();
  return (
    <div className="main-container">
      <div className="page-title">
        <h1>Welcome back!</h1>
      </div>
      <div className="login-interface-main">
        <form
          id="login"
          onSubmit={async (event) => {
            event.preventDefault();

            try {
              const { token, user } = await loginUser(username, password);

              storeToken(token);
              storeUser(user.username);
              setLoggedIn(true);
              setUsername("");

              setPassword("");
              setError("");

              history.push("/");
            } catch (error) {
              setError(error);
            }
          }}
        >
          <fieldset className="login-input">
            <label htmlFor="username">Username </label>
            <input
              id="username"
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            ></input>
          </fieldset>

          <fieldset className="login-input">
            <label htmlFor="password">Password </label>

            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></input>
          </fieldset>

          <button className="login-interface-button" to="/my-info">
            Login!
          </button>
          {error.response ? <p>Username or Password sucks</p> : null}
        </form>
      </div>
    </div>
  );
};

export default Login;
