const express = require("express");
const listRouter = express.Router();
const { updateLists, getHistoryByUser } = require("../db/lists");

listRouter.post("/", async (req, res, next) => {
  console.log(req.body, "<---req.body");
  const { date, userId, historicalLists } = req.body;

  try {
    if ((date, userId, historicalLists)) {
      const addList = await updateLists(date, userId, historicalLists);
      res.send(addList);
    } else {
      res.send({ message: "Missing fields" });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

listRouter.post("/history", async (req, res, next) => {
  const { userId } = req.body;

  try {
    if (userId) {
      const history = await getHistoryByUser(userId);
      res.send(history);
    } else {
      res.send({ message: "Missing fields" });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = listRouter;
