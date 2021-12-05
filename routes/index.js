const express = require("express");
const apiRouter = express.Router();
const jwt = require("jsonwebtoken");
const { getUserById } = require("../db/users");
const { JWT_SECRET } = process.env;

apiRouter.get("/health", (req, res, next) => {
  try {
    res.send({
      message: "Healthy",
    });
  } catch (error) {
    next(error);
  }
});

apiRouter.use(async (req, res, next) => {
  const auth = req.header("Authorization");

  if (!auth) {
    return next();
  }

  if (auth.startsWith("Bearer ")) {
    const token = auth.slice("Bearer ".length);

    try {
      const parsedToken = jwt.verify(token, JWT_SECRET);

      const id = parsedToken && parsedToken.id;
      if (id) {
        req.user = await getUserById(id);
        next();
      }
    } catch ({ name, message }) {
      next({ name, message });
    }
  } else {
    next({ name: "AuthError", message: "Error in authorization format" });
  }
});

apiRouter.use((req, res, next) => {
  if (req.user) {
    console.log("User is set:", req.user);
  }
  next();
});

const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

const recipeRouter = require("./recipes");
apiRouter.use("/recipes", recipeRouter);

module.exports = apiRouter;
