const { client } = require("./index");

async function createRecipe({ name, description, ingredients, count }) {
  try {
    console.log(name, description, ingredients, count, "From DB.");
    const {
      rows: [recipe],
    } = await client.query(
      `
          INSERT INTO recipes(name , description, ingredients, count)
          VALUES($1, $2, $3, $4)
          ON CONFLICT (name) DO NOTHING
          RETURNING *;
          `,
      [name, description, ingredients, count]
    );

    return recipe;
  } catch (error) {
    throw error;
  }
}

async function getRecipes() {
  try {
    const { rows } = await client.query(
      `
    SELECT * FROM recipes;
    `
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getRecipeById(id) {
  try {
    const {
      rows: [recipe],
    } = await client.query(
      `
    SELECT * FROM recipes
    WHERE id=$1;
    `,
      [id]
    );

    return recipe;
  } catch (error) {
    throw error;
  }
}

async function getRecipeByRecipename(name) {
  try {
    const { rows } = await client.query(
      `
    SELECT * FROM recipes
    WHERE name=$1;
    `,
      [name]
    );
    if (!rows || !rows.length) {
      return null;
    }

    const [name] = rows;
    return name;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createRecipe,
  getRecipes,
  getRecipeById,
  getRecipeByRecipename,
};
