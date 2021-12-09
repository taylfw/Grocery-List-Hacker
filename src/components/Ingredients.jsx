import React from "react";
import { SingleIngredientCard } from ".";
import { Fragment } from "react";
import "./Recipes.css";

const Ingredients = ({ allIngredients }) => {
  return (
    <div className="recipes-main-container">
      {allIngredients.map((ingredient) => {
        return (
          <Fragment key={`ingredients in ingredients: ${ingredient.id}`}>
            <SingleIngredientCard ingredient={ingredient} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Ingredients;
