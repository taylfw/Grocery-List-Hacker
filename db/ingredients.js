const { client } = require("./index");

async function createIngredients({ name, type }) {
  try {
    const {
      rows: [ingredient],
    } = await client.query(
      `
          INSERT INTO ingredients(name , type)
          VALUES($1, $2)
          ON CONFLICT (name) DO NOTHING
          RETURNING *;
          `,
      [name, type]
    );

    return ingredient.name;
  } catch (error) {
    throw error;
  }
}

async function getIngredients() {
  try {
    const { rows } = await client.query(
      `
    SELECT * FROM ingredients;
    `
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getIngredientById(id) {
  try {
    const {
      rows: [ingredient],
    } = await client.query(
      `
    SELECT * FROM ingredients
    WHERE id=$1;
    `,
      [id]
    );

    return ingredient;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createIngredients,
  getIngredients,
  getIngredientById,
};
