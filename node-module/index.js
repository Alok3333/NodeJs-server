const express = require("express");

const server = express();
const PORT = 3002;

server.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})
console.log("Namaste node-module");