const { client } = require("./index");

async function updateLists(userId, historicalLists) {
  try {
    console.log("Sup, dawg");
    console.log(userId, historicalLists);
    const {
      rows: [list],
    } = await client.query(
      `
        INSERT INTO lists("userId", "historicalLists")
        Values($1, $2);
                `,
      [userId, historicalLists]
    );
    console.log("Can I get here?");

    return list;
  } catch (error) {
    console.log("Am I here?");
    console.log(error);
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
