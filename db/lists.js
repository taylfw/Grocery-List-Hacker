const { client } = require("./index");

// this one lets us store info with some dummy data
async function updateLists(
  userId,
  ingredients,
  completed,
  currentIngredientArray
) {
  try {
    const {
      rows: [list],
    } = await client.query(
      `
        INSERT INTO lists("userId", "ingredientArray", completed, "historicalLists")
        Values($1, $2, $3, $4)
                `,
      [userId, ingredients, completed, currentIngredientArray]
    );
    return list;
  } catch (error) {
    throw error;
  }
}

async function getHistoryByUser(userId) {
  try {
    const { rows } = await client.query(
      `
      SELECT * FROM lists
      WHERE "userId" = $1 AND completed = 'true'
      `,
      [userId]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = { updateLists, getHistoryByUser };
