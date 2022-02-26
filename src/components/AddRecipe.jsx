import React from "react";
import { useState } from "react";
import { createRecipe } from "../api";

const AddRecipe = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [count, setCount] = useState(1);

  return (
    <div className="AddRecipe-main-container">
      <div className="blurb">
        <form
          id="add-recipe"
          onSubmit={async (event) => {
            event.preventDefault();
            try {
              const data = await createRecipe({
                name,
                description,
                ingredient,
                count,
              });
              setName("");
              setDescription("");
              setIngredient("");
              setCount(1);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <fieldset className="add-recipe-input">
            <label htmlFor="name">Name </label>
            <input
              id="name"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            ></input>
          </fieldset>
          <fieldset className="add-recipe-input">
            <label htmlFor="description">Description </label>
            <input
              id="description"
              type="text"
              placeholder="Enter Description"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            ></input>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
        <h3>Enjoy!</h3>
      </div>
    </div>
  );
};

export default AddRecipe;
