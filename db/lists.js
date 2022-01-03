const { client } = require("./index");

async function updateLists(date, userId, historicalLists) {
  try {
    console.log("Sup, dawg");
    console.log(date, userId, historicalLists);
    const {
      rows: [list],
    } = await client.query(
      `
        INSERT INTO lists("date", "userId", "historicalLists")
        Values($1, $2, $3)
        
       
                `,
      [date, userId, historicalLists]
    );

    return list;
  } catch (error) {
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
