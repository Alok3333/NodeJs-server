const { getCurrencies, getCurrenciesBySymbol } = require("../controllers/currencies.controllers");
const router = require("express").Router();

// /currencies get route
router.get("/", getCurrencies);

router.get("/:symbol", getCurrenciesBySymbol);

module.exports = router;