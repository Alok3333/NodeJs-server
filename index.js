const http = require("http");
const apiData = require("./api_data.json");

// const serverInfo = {
//     serverName: "Crio.Do",
//     version: "1.0.0",
//     currentDate: new Date().toDateString(),
//     currentTime: new Date().toTimeString(),
// }

// const server = http.createServer((req, res) => {
//     console.log("server Date & Time: ", new Date().toLocaleDateString(), new Date().toLocaleTimeString());
//     if (req.url === "/status") {
//         res.writeHead(418, { "Content-Type": "application/json" });
//         res.write(JSON.stringify(serverInfo));
//         res.end();
//     } else {
//         res.writeHead(418, { "Content-Type": "text/html" });
//         res.write("<h1>This status code is making a fool.</h1>");
//         res.end();
//     }
// });

// const server = http.createServer((req, res) => {
//     switch (req.url) {
//         case "/":
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.write("<h1>Currency Database</h1>");
//             res.end();
//             break;
//         case "/currencies":
//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.write(JSON.stringify(apiData.data));
//             res.end();
//             break;

//         default:
//             res.writeHead(404, { "Content-Type": "text/html" });
//             res.write(JSON.stringify({ message: "Invalid Symbol" }));
//             res.end();
//             break;
//     }
// });

const aboutData = {
    "page": "ABOUT PAGE",
    "message": "HAVE YOU ENJOYED THE NODE JS RUNTIME",
    "currentTime": new Date().toTimeString(),
}

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h1>WELCOME ALOK IN NODE JS SERVER</h1>");
            res.end();
            break;
        case "/about":
            res.writeHead(202, { "Content-Type": "application/json" });
            res.write(JSON.stringify(aboutData));
            res.end();
            break;
            
        default:
            res.writeHead(418, { "Content-Type": "application/json" });
            res.write(JSON.stringify({ message: "Page not found" }));
            res.end();
            break;
    }
})

server.listen(8082, () => {
    console.log("Listening => on 8082");
});