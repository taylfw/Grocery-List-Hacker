import React from "react";
import { Link } from "react-router-dom";
import "./SingleRecipeCard.css";

const SingleRecipeCard = ({ recipe }) => {
  return (
    <div className="single-recipe-card-main-container">
      <div to={`/single-recipe/${recipe.id}`}>
        <h1 className="single-recipe-card-name">{recipe.name}</h1>
      </div>
      <h3 className="single-recipe-card-description">{recipe.description}</h3>
      <div className="single-recipe-card-inner-container"></div>
      <button>Add</button>
    </div>
  );
};

export default SingleRecipeCard;
