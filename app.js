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
    const { min_value } = req.query;
    // console.log(typeof (min_value), min_value, "min val");
    if(min_value){
        const currenciesDataWithFilter = currenciesData.data.filter(({min_size}) => Number(min_size) === Number(min_value));
        return res.status(200).send(currenciesDataWithFilter);
    }
    
    res.status(200).send(currenciesData.data);
});

app.get("/currencies/:symbol", (req, res) => {
    const currenciesDataFindWithSymbol = currenciesData.data.find((currency) => currency.id.toLowerCase() === req.params.symbol.toLowerCase());
    // console.log(typeof(currenciesDataFindWithSymbol))
    if (currenciesDataFindWithSymbol === undefined)
        return res.status(404).send({ message: "Invalid Symbol" });
    res.status(200).send(currenciesDataFindWithSymbol);
    console.log(currenciesDataFindWithSymbol)
});


// listening a port
app.listen(PORT, () => {
    console.log(`application start on port number ${PORT}`);
});