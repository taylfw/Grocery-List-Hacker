// code to build and initialize DB goes here
const { toComputedKey } = require("@babel/types");
const { client, users } = require("./index");

const { createUser } = require("./users");
const { createRecipe } = require("./recipes");
const { createIngredients } = require("./ingredients");

async function buildTables() {
  try {
    client.connect();

    // drop tables in correct order
    async function dropTables() {
      console.log("Dropping All Tables...");
      // drop all tables, in the correct order
      try {
        await client.query(`
      DROP TABLE IF EXISTS lists;
      DROP TABLE IF EXISTS ingredients;
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

        await client.query(`
      CREATE TABLE ingredients (
        id SERIAL PRIMARY KEY,
        name varchar(255) UNIQUE NOT NULL,
        type TEXT NOT NULL
      );
    `);

        await client.query(`
    CREATE TABLE lists (
      id SERIAL PRIMARY KEY,
      date TEXT,
      "userId" INTEGER REFERENCES users(id),
      "historicalLists" TEXT ARRAY
      );
  `);

        console.log("Finished creating recipe table!");
      } catch (error) {
        console.error("Error building tables!");
        console.log(error);
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
            ingredients: [
              {
                iName: "GF Pasta",
                type: "Shelf Item",
              },
              {
                iName: "Marinara Sauce",
                type: "Shelf Item",
              },
              {
                iName: "Chicken Sausage",
                type: "Meat: poultry",
              },
            ],
            count: 1,
          },
          {
            name: "Nachos",
            description: "Some do tacos on Tuesday. Not us.",
            ingredients: [
              { iName: "Ground Beef", type: "meat:beef" },
              {
                iName: "Tortilla Chips",
                type: "Shelf Item",
              },
              {
                iName: "Blended Shredded Cheese",
                type: "Dairy",
              },
              {
                iName: "Onion",
                type: "A Produce",
              },
              {
                iName: "Avocado",
                type: "A Produce",
              },
              {
                iName: "Lettuce",
                type: "A Produce",
              },
            ],
            count: 1,
          },

          {
            name: "Sloppy Joe's",
            description: "A messy meal",
            ingredients: [
              {
                iName: "Ground Beef",
                type: "meat:beef",
              },
              {
                iName: "Burger Buns",
                type: "Shelf Item",
              },
              {
                iName: "Ketchup",
                type: "Shelf Item",
              },
              {
                iName: "Brown Sugar",
                type: "Shelf Item",
              },
            ],
            count: 1,
          },

          {
            name: "Breakfast",
            description: "The most important Meal.",
            ingredients: [
              {
                iName: "Eggs",
                type: "Dairy",
              },
              {
                iName: "GF Bread",
                type: "Shelf Item",
              },
              {
                iName: "Ham",
                type: "Deli",
              },
              {
                iName: "Cereal",
                type: "Shelf Item",
              },
              {
                iName: "Kale",
                type: "A Produce",
              },
              {
                iName: "Milk",
                type: "Dairy",
              },
              {
                iName: "Coffee",
                type: "Shelf Item",
              },
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

    async function createInitialIngredients() {
      try {
        const ingredientsToCreate = [
          {
            name: "GF Pasta",
            type: "Shelf Item",
          },
          {
            name: "Marinara Sauce",
            type: "Shelf Item",
          },
          {
            name: "Chicken Sausage",
            type: "Meat: poultry",
          },
          {
            name: "Ground Beef",
            type: "Meat: Beef",
          },
          {
            name: "Tortilla Chips",
            type: "Shelf Item",
          },
          {
            name: "Blended Shredded Cheese",
            type: "Dairy",
          },
          {
            name: "Kale",
            type: 1,
          },

          {
            name: "Onion",
            type: 1,
          },
          {
            name: "Avocado",
            type: 1,
          },
          {
            name: "Lettuce",
            type: 1,
          },

          {
            name: "Burger Buns",
            type: "Shelf Item",
          },
          {
            name: "Ketchup",
            type: "Shelf Item",
          },
          {
            name: "Brown Sugar",
            type: "Shelf Item",
          },
          {
            name: "Eggs",
            type: "Dairy",
          },
          {
            name: "Ham",
            type: "Deli",
          },
          {
            name: "Cereal",
            type: "Shelf Item",
          },
          {
            name: "Coffee",
            type: "Shelf Item",
          },
          {
            name: "Milk",
            type: "Dairy",
          },
        ];

        const ingredients = await Promise.all(
          ingredientsToCreate.map(createIngredients)
        );

        console.log("ingredients created:");
        console.log(ingredients);
        console.log("Finished creating ingredients!");
      } catch (error) {
        console.error("Error creating ingredients!");
      }
    }
    await createInitialIngredients();
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
