const express = require("express");
const currencyRouter = require("./routes/currencies.routes");
const userRouter = require("./routes/user.routes");

// Instance of expressJs
const app = express();
const PORT = 8082

// currencies router use
app.use("/currencies", currencyRouter);

// users router use
app.use("/users", userRouter);

// listening a port
app.listen(PORT, () => {
    console.log(`application start on port number ${PORT}`);
});