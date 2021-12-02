const { client } = require("./index");

async function createRecipe({ name, description, ingredients, count }) {
  try {
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

    return recipe.name;
  } catch (error) {
    throw error;
  }
}

async function getRecipe({ name }) {
  try {
    const {
      rows: [name],
    } = await client.query(
      `
    SELECT * FROM recipes
    WHERE name=$1;
    `,
      [name]
    );

    return name;
  } catch (error) {
    throw error;
  }
}

async function getUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    SELECT * FROM users
    WHERE id=$1;
    `,
      [id]
    );

    delete user.password;

    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(username) {
  try {
    const { rows } = await client.query(
      `
    SELECT * FROM users
    WHERE username=$1;
    `,
      [username]
    );
    if (!rows || !rows.length) {
      return null;
    }

    const [user] = rows;
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByUsername,
};
