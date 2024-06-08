const currenciesData = require("./api_data.json");
const express = require("express");

// Instance of expressJs
const app = express();
const PORT = 8082

// create a routes get
app.get("/", (req, res) => {
    res.send(`<h1>Currency Database</h1>`);
});

// /currencies get route
app.get("/currencies", (req, res) => {
    res.send(currenciesData.data);
});

// listening a port
app.listen(PORT, () => {
    console.log(`application start on port number ${PORT}`);
});