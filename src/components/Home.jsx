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
        <ul>
          <li>Choose recipes that you plan to make</li>
          <li>Add the ingredients to your list</li>
          <li>
            The Combinator will order your list by type, so you don't have to
            visit the same area of the grocery store twice!
          </li>
        </ul>

        <h3>Enjoy!</h3>
      </div>
    </div>
  );
};

export default Home;
