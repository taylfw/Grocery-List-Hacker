import React from "react";
import { useParams } from "react-router";
import "./SingleRecipe.css";
import { SingleIngredientCard } from ".";

const SingleRecipe = ({ allRecipes, allIngredients, setList, list }) => {
  const { id } = useParams();
  const recipe = allRecipes.find((element) => element.id == id);

  return (
    <div className="single-recipe-main-container">
      <div className="outermost">
        <div className="outer-title-container">
          <h1 className="single-recipe-name">{recipe.name}</h1>
          <h2>{recipe.description}</h2>
        </div>
      </div>
      <div className="ingredients-container">
        {recipe.ingredients.map((ingredient) => {
          let ingredient2 = JSON.parse(ingredient);
          return (
            <div className="ingredient-container">
              <SingleIngredientCard
                key={Math.random()}
                ingredient={ingredient2}
              />
              <div className="outer-button-container">
                <button
                  className="add-button"
                  onClick={async (event) => {
                    event.preventDefault();
                    try {
                      setList([ingredient2, ...list]);
                    } catch (error) {
                      throw error;
                    }
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleRecipe;
