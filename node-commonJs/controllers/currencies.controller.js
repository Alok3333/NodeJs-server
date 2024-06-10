const currenciesData = require("./api_data.json");

const getCurrencies = (req, res) => {
    const { min_value } = req.query;
    if (min_value) {
        const currenciesDataWithFilter = currenciesData.data.filter(({ min_size }) => parseInt(min_size) === parseInt(min_value));
        return res.status(200).send(currenciesDataWithFilter);
    }
    res.status(200).send(currenciesData.data);
};

const getCurrenciesBySymbol = (req, res) => {
    const { symbol } = req.params;
    const currenciesDataFindWithSymbol = currenciesData.data.find(({ id }) => id.toLowerCase() === symbol.toLowerCase());
    if (currenciesDataFindWithSymbol === undefined)
        return res.status(404).send({ message: "Invalid Symbol" });
    res.status(200).send(currenciesDataFindWithSymbol);
};

module.exports = { getCurrencies, getCurrenciesBySymbol }