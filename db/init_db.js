// code to build and initialize DB goes here
const { toComputedKey } = require("@babel/types");
const { client, users } = require("./index");

const { createUser } = require("./users");
const { createRecipe } = require("./recipes");

async function buildTables() {
  try {
    client.connect();

    // drop tables in correct order
    async function dropTables() {
      console.log("Dropping All Tables...");
      // drop all tables, in the correct order
      try {
        await client.query(`
      DROP TABLE IF EXISTS recipes;
      DROP TABLE IF EXISTS users;
      `);

        console.log("Finished dropping tables");
      } catch (error) {
        console.error(error);
        console.error("Error dropping tables");
      }
    }

    // build tables in correct order
    async function createTables() {
      console.log("Starting to build tables...");
      try {
        await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username varchar(255) UNIQUE NOT NULL,
        password varchar(255) NOT NULL,
        admin BOOLEAN DEFAULT 'false'
      );
    `);

        await client.query(`
      CREATE TABLE recipes (
        id SERIAL PRIMARY KEY,
        name varchar(255) UNIQUE NOT NULL,
        description TEXT NOT NULL,
        ingredients TEXT ARRAY,
        count INTEGER
      );
    `);

        console.log("Finished creating recipe table!");
      } catch (error) {
        console.error("Error building tables!");
        throw error;
      }
    }
    await dropTables();
    await createTables();
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    // create useful starting data
    async function createInitialUsers() {
      console.log("Starting to create users...");
      try {
        const usersToCreate = [
          { username: "Frank", password: "PassTheBeans", admin: true },
          { username: "Colleen", password: "Welcome123", admin: false },
        ];

        const users = await Promise.all(usersToCreate.map(createUser));

        console.log("Users created:");
        console.log(users);
        console.log("Finished creating users!");
      } catch (error) {
        console.error("Error creating users!");
      }
    }

    async function createInitialRecipes() {
      console.log("Starting to create recipes...");
      try {
        const recipesToCreate = [
          {
            name: "Gluten Free Pasta",
            description: "A meal for hungry people",
            ingredients: ["GF Pasta", "marinara sauce", "chicken suasage"],
            count: 1,
          },
          {
            name: "Nachos",
            description: "Some do tacos on Tuesday. Not us.",
            ingredients: [
              "Ground beef",
              "Tortilla chips",
              "Blended Shredded Cheese",
            ],
            count: 1,
          },
        ];

        const recipes = await Promise.all(recipesToCreate.map(createRecipe));

        console.log("recipes created:");
        console.log(recipes);
        console.log("Finished creating recipes!");
      } catch (error) {
        console.error("Error creating recipes!");
      }
    }

    await createInitialRecipes();
    await createInitialUsers();
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
