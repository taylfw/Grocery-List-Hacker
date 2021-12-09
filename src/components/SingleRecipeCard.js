import React from "react";
import { Link } from "react-router-dom";
import "./SingleRecipeCard.css";

const SingleRecipeCard = ({ recipe }) => {
  return (
    <form>
      <div className="single-recipe-card-main-container">
        <Link to={`/single-recipe/${recipe.id}`}>
          <h1 className="single-recipe-card-name">{recipe.name}</h1>
        </Link>
        <h3 className="single-recipe-card-description">{recipe.description}</h3>
        <div className="single-recipe-card-inner-container"></div>
      </div>
    </form>
  );
};

export default SingleRecipeCard;
