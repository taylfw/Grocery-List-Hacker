import React from "react";
import { useParams } from "react-router";
import "./SingleRecipe.css";

const SingleRecipe = ({ allRecipes }) => {
  const { id } = useParams();
  const recipe = allRecipes.find((element) => element.id == id);
  console.log(allRecipes, "<-- From SingleRecipe");
  console.log(recipe, "<---");
  return (
    <div className="single-recipe-main-container">
      <h1 className="single-recipe-name">{recipe.name}</h1>
    </div>
  );
};

export default SingleRecipe;
