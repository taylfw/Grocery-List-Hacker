import React, { useState } from "react";
import "./SingleIngredientCard.css";

const SingleIngredientCard = ({ ingredient }) => {
  const [grabItem, setGrabItem] = useState(false);
  return (
    <div className="single-ingredient-container">
      <button
        className="single-ingredient-card"
        onClick={async (event) => {
          event.preventDefault();

          console.log(`${ingredient.name} has been clicked.`);
          await setGrabItem(true);
          console.log(grabItem);
        }}
      >
        <p className="ingredient-name">{ingredient.name}</p>
        <p className="ingredient-type">{ingredient.type}</p>
        <div className="tick-container"></div>
      </button>
      <input type="checkbox"></input>
    </div>
  );
};

export default SingleIngredientCard;
