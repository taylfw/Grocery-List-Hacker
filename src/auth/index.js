export function storeToken(token) {
  localStorage.setItem("token", JSON.stringify(token));
}

export function getToken() {
  const myToken = JSON.parse(localStorage.getItem("token"));

  return myToken;
}

export function storeUser(username) {
  localStorage.setItem("username", JSON.stringify(username));
}

export function getUser() {
  const myUsername = JSON.parse(localStorage.getItem("username"));

  return myUsername;
}
