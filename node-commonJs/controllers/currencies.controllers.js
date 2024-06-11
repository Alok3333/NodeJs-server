const axios = require("axios");

const getCurrencies = async (req, res) => {
    const { min_value } = req.query;
    try {
        const { data: currenciesData } = await axios.get(`https://gitlab.crio.do/public_content/node-js-sessions/-/raw/master/response.json`);
        if (min_value) {
            const currenciesDataWithFilter = currenciesData.data.filter(({ min_size }) => parseInt(min_size) === parseInt(min_value));
            return res.status(200).send(currenciesDataWithFilter);
        }
        res.status(200).send(currenciesData.data);
    } catch (err) { res.status(500).send({ message: "server error" }) }
};

const getCurrenciesBySymbol = async (req, res) => {
    const { symbol } = req.params;
    try {
        const { data: currenciesData } = await axios.get(`https://gitlab.crio.do/public_content/node-js-sessions/-/raw/master/response.json`);
        const currenciesDataFindWithSymbol = currenciesData.data.find(({ id }) => id.toLowerCase() === symbol.toLowerCase());
        if (currenciesDataFindWithSymbol === undefined)
            return res.status(404).send({ message: "Invalid Symbol" });
        res.status(200).send(currenciesDataFindWithSymbol);
    } catch (err) { res.status(400).send({ message: "Bad Request" }) }
};

module.exports = { getCurrencies, getCurrenciesBySymbol }