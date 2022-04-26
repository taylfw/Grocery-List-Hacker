const express = require("express");
const recipeRouter = express.Router();

const { createRecipe, getRecipes, getRecipeById } = require("../db/recipes");

recipeRouter.get("/", async (req, res, next) => {
  try {
    const recipes = await getRecipes();
    if (recipes) {
      res.send(recipes);
    } else {
      res.send({ message: "No recipe found" });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

recipeRouter.post("/", async (req, res, next) => {
  const { name, description, ingredients, count } = req.body;
  if (!name || !description || !ingredients || !count) {
    next({
      name: "MissingCredentialsError",
      message: "Please fill out all fields",
    });
  }
  try {
    const product = await createRecipe({
      name,
      description,
      ingredients,
      count,
    });
    if (product) {
      console.log("Hello from the router");
      res.send(product);
    } else {
      next({
        name: "IncorrectCredentialsError",
        message: "One of your fields is screwed up man!",
      });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

recipeRouter.post("/", async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    next({
      name: "MissingCredentialsError",
      message: "Please supply an id",
    });
  }
  try {
    const product = await getRecipeById(id);
    if (product) {
      res.send(product);
    } else {
      next({
        name: "IncorrectCredentialsError",
        message: "Id is incorrect",
      });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

recipeRouter.patch("/", async (req, res, next) => {
  const { id, count } = req.body;
  try {
    const updateCount = await updateRecipeCount({
      id,
      count,
    });
    res.send(updateCount);
  } catch (error) {
    next({ name: "MissingFieldsError", message: "Missing Information" });
  }
});

module.exports = recipeRouter;
