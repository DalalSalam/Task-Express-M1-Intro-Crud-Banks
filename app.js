const express = require("express");
const app = express();
const accounts = require("./accounts");
const PORT = 8000;
const accountRouter = require("./apis/accounts/accounts.routes");

app.use(express.json());
app.use("/api", accountRouter);

app.listen(8000, () => {
  console.log(`The application is running on localhost: ${PORT}`);
});
