import React from "react";
import { useParams } from "react-router";
import "./SingleRecipe.css";
import { SingleIngredientCard } from ".";

const SingleRecipe = ({ allRecipes, allIngredients, setList, list }) => {
  const { id } = useParams();
  const recipe = allRecipes.find((element) => element.id == id);

  return (
    <div className="single-recipe-main-container">
      <h1 className="single-recipe-name">{recipe.name}</h1>
      <h2>{recipe.description}</h2>
      <div className="ingredients-container">
        {recipe.ingredients.map((ingredient) => {
          return allIngredients.map((ingredient2) => {
            if (ingredient === ingredient2.name) {
              return (
                <div className="ingredient-container">
                  <SingleIngredientCard
                    key={ingredient2.id}
                    ingredient={ingredient2}
                  />
                  <div className="outer-button-container">
                    <button className="add-button"
                      onClick={async (event) => {
                        event.preventDefault();
                        try {
                          setList([ingredient2, ...list]);
                          console.log(list);
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
            }
          });
        })}
      </div>
    </div>
  );
};

export default SingleRecipe;
