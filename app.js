// require express.js
const express = require("express");

// Instance of expressJs
const app = express();
const PORT = 8082

// create a routes get
app.get("/", (req, res) => {
    res.send({"serverStatus": "active"});
});

// listening a port
app.listen(PORT, () => {
    console.log(`application start on port number ${PORT}`);
});