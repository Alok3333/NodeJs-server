const { getText, getCurrencies, getCurrenciesBySymbol } = require("./controllers/currencies.controllers");
const express = require("express");
const { getUsers, getUserByUuid, getUserSearchByGenderAndAge } = require("./controllers/users.controllers");

// Instance of expressJs
const app = express();
const PORT = 8082

// create a routes get
app.get("/", getText);

// /currencies get route
app.get("/currencies", getCurrencies);

app.get("/currencies/:symbol", getCurrenciesBySymbol);

app.get("/users", getUsers);

app.get("/users/:uuid", getUserByUuid);

app.get("/users/search", getUserSearchByGenderAndAge);

// listening a port
app.listen(PORT, () => {
    console.log(`application start on port number ${PORT}`);
});