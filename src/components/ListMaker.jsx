import React from "react";
import "./ListMaker.css";
import Recipes from "./Recipes";
import { List } from ".";

const ListMaker = ({ allRecipes }) => {
  return (
    <div className="list-maker-container">
      <div className="title">
        <h1>Choose recipes to create a list!</h1>
      </div>
      <div className="sub-container">
        <div className="list-container">
          <List />
        </div>
        <div className="recipe-container">
          <Recipes allRecipes={allRecipes} />
        </div>
      </div>
    </div>
  );
};

export default ListMaker;
