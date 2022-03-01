import React from "react";
import { useState } from "react";
import { createRecipe } from "../api";

const AddRecipe = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredient, setIngredient] = useState([]);
  const [count, setCount] = useState(1);

  async (event) => {
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
      setIngredient([]);
      setCount(1);
    } catch (error) {
      console.log(error);
    }
  };

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
            id="ingredient0"
            type="text"
            placeholder="Enter Ingredient"
            value={ingredient}
            onChange={(event) => {
              setIngredient(event.target.value);
            }}
          ></input>
          <select id="selectType">
            <option value="1">Produce</option>
            <option value="2">Deli</option>
            <option value="3">Dairy</option>
          </select>
        </fieldset>
        <button className="nav-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
