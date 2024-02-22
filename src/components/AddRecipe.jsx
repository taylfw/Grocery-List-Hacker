import React from "react";
import { useState } from "react";
import { createRecipe } from "../api";
import "./AddRecipe.css";

const AddRecipe = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [count, setCount] = useState(1);

  async function getUserInput(event) {
    event.preventDefault();

    try {
      const data = {
        name,
        description,
        ingredient,
        count,
      };
      await createRecipe(data);
      setName("");
      setDescription("");
      JSON.stringify(setIngredient(""));
      setCount(1);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login-interface-main">
      <form id="add-recipe" onSubmit={createRecipe}>
        <fieldset className="login-input">
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
        <fieldset className="login-input">
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
        <fieldset className="login-input">
          <label htmlFor="description">Ingredient </label>
          <input
            id="ingredient"
            type="text"
            placeholder="Enter Ingredient"
            value={ingredient}
            onChange={(event) => {
              setIngredient(event.target.value);
            }}
          ></input>
          <select id="selectType">
            <option value="A Produce">Produce</option>
            <option value="Deli">Deli</option>
            <option value="Dairy">Dairy</option>
          </select>
        </fieldset>
        <div className="butt-container">
          <button className="nav-button" type="button">
            Add ingredient
          </button>
          <button className="nav-button" type="submit" onClick={getUserInput}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
