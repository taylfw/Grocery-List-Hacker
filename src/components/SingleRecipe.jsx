import React from "react";
import { useParams } from "react-router";
import "./SingleRecipe.css";
import { SingleIngredientCard } from ".";

const SingleRecipe = ({ allRecipes, allIngredients }) => {
  const { id } = useParams();
  const recipe = allRecipes.find((element) => element.id == id);

  return (
    <div className="single-recipe-main-container">
      <h1 className="single-recipe-name">{recipe.name}</h1>
      <h2>{recipe.description}</h2>
      <div className="ingredient-container">
        {recipe.ingredients.map((ingredient) => {
          return allIngredients.map((ingredient2) => {
            if (ingredient === ingredient2.name) {
              return (
                <SingleIngredientCard
                  key={ingredient2.id}
                  ingredient={ingredient2}
                />
              );
            }
          });
        })}
      </div>
    </div>
  );
};

export default SingleRecipe;
