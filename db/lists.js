const { client } = require("./index");

// this one lets us store info with some dummy data
async function updateLists(userId, currentIngredientArray) {
  try {
    const {
      rows: [list],
    } = await client.query(
      `
        INSERT INTO lists("userId", "historicalLists")
        Values($1, $2, $3, $4)
                `,
      [userId, currentIngredientArray]
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
      WHERE "userId" = $1 
      `,
      [userId]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = { updateLists, getHistoryByUser };
