import React, { useState } from "react";
import "./Register.css";
import { registerUser } from "../api";
import { storeToken, storeUser } from "../auth";
import { useHistory } from "react-router-dom";

const Register = ({ setLoggedIn }) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const admin = false;
  let history = useHistory();

  return (
    <div className="main-container">
      <div className="page-title">
        <h1>Register Now</h1>
      </div>
      <div className="register-interface-main">
        <form
          id="register"
          onSubmit={async (event) => {
            event.preventDefault();

            try {
              const { token, user } = await registerUser(
                username,
                password,
                admin
              );
              storeToken(token);
              storeUser(user);
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
          <fieldset className="register-input">
            <label htmlFor="username">Username</label>
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

          <fieldset className="register-input">
            <label htmlFor="password">Password</label>
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

          <button className="register-interface-button">Submit</button>
          {error.response ? (
            <p>
              {error.response.statusText}: Please make sure your pw is at least
              8 characters long
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Register;
