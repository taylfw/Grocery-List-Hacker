import React from "react";
import { SingleRecipeCard } from ".";
import { Fragment } from "react";
import "./Recipes.css";

const Recipes = ({ allRecipes }) => {
  return (
    <div className="recipes-main-container">
      {allRecipes.map((recipe) => {
        return (
          <Fragment key={`recipe in recipes: ${recipe.id}`}>
            <SingleRecipeCard recipe={recipe} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Recipes;
