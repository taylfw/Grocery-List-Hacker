const { client } = require("./index");

async function createUser({ username, password, admin }) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
          INSERT INTO users(username, password, admin)
          VALUES($1, $2, $3)
          ON CONFLICT (username) DO NOTHING
          RETURNING *;
          `,
      [username, password, admin]
    );

    return user.username;
  } catch (error) {
    throw error;
  }
}

async function getUser({ username, password }) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    SELECT * FROM users
    WHERE username=$1;
    `,
      [username]
    );

    if (!user) {
      return;
    }

    if (user.password !== password) {
      return;
    }
    delete user.password;

    return user;
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
    delete user.password;
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
