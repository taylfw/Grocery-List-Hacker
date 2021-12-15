import React from "react";
import "./SingleIngredientCard.css";

const SingleIngredientCard = ({ ingredient }) => {
  return (
    <div className="single-ingredient-container">
      <div className="single-ingredient-card">
        <p className="ingredient-name">{ingredient.name}</p>
        <p className="ingredient-type">{ingredient.type}</p>
        <div className="tick-container">
          <input type="checkbox"></input>
          <span className="checkmark"></span>
        </div>
      </div>
    </div>
  );
};

export default SingleIngredientCard;
