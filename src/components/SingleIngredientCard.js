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

          grabItem
            ? await (ingredient.selected = false)
            : await (ingredient.selected = true);

          console.log(ingredient);
        }}
      >
        <p className="ingredient-name">{ingredient.iName}</p>
        {/* <p className="ingredient-type">{ingredient.type}</p> */}
      </button>
    </div>
  );
};

export default SingleIngredientCard;
