import React from "react";
import { SingleRecipeCard } from ".";
import { Fragment } from "react";
import "./Home.css";

const Home = ({ allRecipes }) => {
  return (
    <div className="home-main-container">
      <div className="blurb">
        <h3>Welcome!</h3>

        <p>
          This app was made to make your grocery shopping experience much
          faster!
        </p>

        <h3>Enjoy!</h3>
      </div>
    </div>
  );
};

export default Home;
