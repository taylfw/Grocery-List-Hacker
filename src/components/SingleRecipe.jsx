import React from "react";
import { useParams } from "react-router";
import "./SingleRecipe.css";
import { SingleIngredientCard } from ".";

const SingleRecipe = ({ allRecipes, allIngredients }) => {
  const { id } = useParams();
  const recipe = allRecipes.find((element) => element.id == id);

  console.log(allIngredients);
  console.log(recipe);
  return (
    <div className="single-recipe-main-container">
      <h1 className="single-recipe-name">{recipe.name}</h1>
      <h2>{recipe.description}</h2>
      <div className="ingredient-container">
        {recipe.ingredients.map((ingredient) => {
          return allIngredients.map((ingredient2) => {
            console.log(ingredient, ingredient2.name);
            if (ingredient === ingredient2.name) {
              console.log(true);
              return <SingleIngredientCard ingredient={ingredient2} />;
            } else {
              console.log(false);
            }
          });
        })}
      </div>
    </div>
  );
};

export default SingleRecipe;
