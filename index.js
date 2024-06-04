const http = require("http");

const server = http.createServer(() => {
    console.log("server Date & Time: ", new Date().toLocaleDateString(), new Date().toLocaleTimeString());
});

server.listen(8082, () => {
    console.log("Listening...");
});