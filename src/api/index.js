import axios from "axios";

const BASE = "http://localhost:5000/api";

export async function getUsers() {
  try {
    const { data } = await axios.get(`${BASE}/users`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      username,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username, password, admin) {
  try {
    const { data } = await axios.post(`${BASE}/users/register`, {
      username,
      password,
      admin,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getUserByUsername(username) {
  try {
    const { data } = await axios.post(`${BASE}/users`, {
      username,
    });

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getRecipes() {
  try {
    const { data } = await axios.get(`${BASE}/recipes`);

    return data;
  } catch (error) {
    throw error;
  }
}

export async function createRecipe({ name, description, ingredient, count }) {
  try {
    const { data } = await axios.post(`${BASE}/recipes`, {
      name,
      description,
      ingredient,
      count,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getRecipeById(id) {
  try {
    const { data } = await axios.post(`${BASE}/recipes`, {
      id,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getIngredients() {
  try {
    const { data } = await axios.get(`${BASE}/ingredients`);

    return data;
  } catch (error) {
    throw error;
  }
}

export async function storeList(userId, historicalLists) {
  try {
    const { data } = await axios.post(`${BASE}/lists`, {
      userId,
      historicalLists,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function history(userId) {
  try {
    const { data } = await axios.post(`${BASE}/lists/history`, {
      userId,
    });
    return data;
  } catch (error) {
    throw error;
  }
}
