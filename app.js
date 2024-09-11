const express = require("express");
const app = express();
const accounts = require("./accounts");

app.use(express.json());

app.get("/accounts", (req, res) => {
  return res.status(200).json(accounts);
});

app.post("/api/create", (req, res) => {
  console.log(req.body);
  const newAccount = {
    id: accounts.length + 1,
    username: req.body.username,
    funds: req.body.funds,
  };

  accounts.push(newAccount);
  res.status(201).json({
    message: "Account created",
    data: accounts,
  });
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
