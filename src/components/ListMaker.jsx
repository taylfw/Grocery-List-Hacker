import React from "react";
import "./ListMaker.css";
import Recipes from "./Recipes";

import AddRecipe from "./AddRecipe";

const ListMaker = ({ allRecipes, allIngredients }) => {
  return (
    <div className="list-maker-container">
      <div className="outermost">
        <div className="outer-title-container">
          <h2>This page lets you browse your recipes and public recipes.</h2>
        </div>
      </div>
      <div className="sub-container">
        <div className="recipe-container">
          <div className="list-maker-title">
            <h2>Public Recipes</h2>
          </div>
          <Recipes allRecipes={allRecipes} allIngredients={allIngredients} />
        </div>
        <div className="recipe-container">
          <h2>Your Recipes</h2>
        </div>

        <div className="recipe-container">
          <h2>Create your own Recipes!</h2>
          <AddRecipe />
        </div>
      </div>
    </div>
  );
};

export default ListMaker;
