const express = require("express");
const ingredientRouter = express.Router();

const {
  createIngredient,
  getIngredients,
  getIngredientById,
} = require("../db/ingredients");

ingredientRouter.get("/", async (req, res, next) => {
  try {
    const recipes = await getIngredients();
    if (recipes) {
      res.send(recipes);
    } else {
      res.send({ message: "No recipe found" });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

ingredientRouter.post("/", async (req, res, next) => {
  const { name, type } = req.body;
  if (!name || !type) {
    next({
      name: "Missing",
      message: "name or Type not found.",
    });
  }
  try {
    const product = await createIngredient({
      name,
      type,
    });
    if (product) {
      res.send(product);
    } else {
      next({
        name: "IncorrectCredentialsError",
        message: "One of your fields is fucked up man!",
      });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

ingredientRouter.post("/", async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    next({
      name: "MissingCredentialsError",
      message: "Please supply an id",
    });
  }
  try {
    const product = await getIngredientById(id);
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

module.exports = ingredientRouter;
