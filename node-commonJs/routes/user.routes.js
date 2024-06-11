const { getUsers, getUserByUuid, getUserSearchByGenderAndAge } = require("../controllers/users.controllers");
const router = require("express").Router();

router.get("/", getUsers);

router.get("/search", getUserSearchByGenderAndAge);

router.get("/:uuid", getUserByUuid);

module.exports = router;