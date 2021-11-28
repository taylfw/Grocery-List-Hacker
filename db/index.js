// Connect to DB
const { Client } = require('pg');
const DB_NAME = 'GroceryListHacker'
const DB_URL = process.env.DATABASE_URL || `postgres://postgres@localhost:5432/${DB_NAME}`;
const client = new Client({
  connectionString: DB_URL,
ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : undefined,
});

// database methods

// export
module.exports = {
  client,
  // db methods
}