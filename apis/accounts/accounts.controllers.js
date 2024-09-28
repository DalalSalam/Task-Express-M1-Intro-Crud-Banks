const accounts = require("../../accounts");

const getAllAccounts = (request, responce) => {
  return responce.json({ data: accounts });
};

const getOneAccount = (request, response) => {
  const { id } = request.params;
  const account = accounts.find((account) => {
    if (account.id == id) return true;
  });
  if (!account) {
    return response.status(404).json({ error: "Account Not Found" });
  } else {
    return response.status(200).json({ data: account });
  }
};

const deleteAccount = (request, response) => {
  const { id } = request.params;

  const updateAccounts = accounts.filter((account) => {
    if (account.id != id) {
      return true;
    }
  });
  return response.status(200).json({ data: updateAccounts });
};

const createAccount = (req, res) => {
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
};

const updateAccount = (request, responce) => {
  const { id } = request.params;

  const accountFound = accounts.find((account) => {
    if (account.id == id) {
      return true;
    }
  });
  return responce.json("Updated request");
};
module.exports = {
  getAllAccounts,
  getOneAccount,
  createAccount,
  deleteAccount,
  updateAccount,
};
