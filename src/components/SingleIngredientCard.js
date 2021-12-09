import React from "react";
import "./SingleIngredientCard.css";

const SingleIngredientCard = ({ ingredient }) => {
  return (
    <div>
      <h1>{ingredient.name}</h1>
      <h2>{ingredient.type}</h2>
      <button>Add</button>
    </div>
  );
};

export default SingleIngredientCard;
