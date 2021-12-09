import React from "react";
import "./ListMaker.css";
import Recipes from "./Recipes";
import { List } from ".";

const ListMaker = ({ allRecipes, allIngredients }) => {
  return (
    <div className="list-maker-container">
      <div className="list-maker-title">
        <h1>Choose recipes to create a list!</h1>
      </div>
      <div className="sub-container">
        <div className="recipe-container">
          <Recipes allRecipes={allRecipes} allIngredients={allIngredients} />
        </div>
      </div>
    </div>
  );
};

export default ListMaker;
