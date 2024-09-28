const express = require("express");
const accounts = require("../../accounts.js");
const {
  getAllAccounts,
  getOneAccount,
  deleteAccount,
  createAccount,
  updateAccount,
} = require("./accounts.controllers.js");

const accountRouter = express.Router();

accountRouter.get("/accounts", getAllAccounts);

accountRouter.get("/account/:id", getOneAccount);

accountRouter.delete("/account/:id", deleteAccount);

accountRouter.post("/account", createAccount);

accountRouter.put("/account/:id", updateAccount);

module.exports = accountRouter;
