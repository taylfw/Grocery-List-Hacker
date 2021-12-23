import React, { useState } from "react";
import "./SingleIngredientCard.css";

const SingleIngredientCard = ({ ingredient }) => {
  const [grabItem, setGrabItem] = useState(false);

  return (
    <div className="single-ingredient-container">
      <button
        className={
          grabItem ? "single-ingredient-selected" : "single-ingredient-card"
        }
        onClick={async (event) => {
          event.preventDefault();
          grabItem ? await setGrabItem(false) : await setGrabItem(true);
        }}
      >
        <p className="ingredient-name">{ingredient.name}</p>
        {/* <p className="ingredient-type">{ingredient.type}</p> */}
      </button>
    </div>
  );
};

export default SingleIngredientCard;
