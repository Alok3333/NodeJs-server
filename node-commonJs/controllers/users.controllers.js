const axios = require("axios");

const getUsers = async (req, res) => {
    try {
        const { data: usersData } = await axios.get(`https://gitlab.crio.do/public_content/node-js-sessions/-/raw/master/users.json`);
        res.send(usersData.data);
    } catch (error) {
        res.status(500).send({ message: "Something went wrong" });
    };
};

const getUserByUuid = async (req, res) => {
    const { uuid } = req.params;
    console.log(uuid);
    try {
        const { data: usersData } = await axios.get(`https://gitlab.crio.do/public_content/node-js-sessions/-/raw/master/users.json`);
        if (uuid)
            return res.send(usersData.data.filter((user) => user.login.uuid === uuid));
        res.status(400).send({ message: "Bad Request" });
    } catch (error) {
        res.status(500).send({ message: "server not responsed!" })
    }
};

const getUserSearchByGenderAndAge = async (req, res) => {
    console.log(req.query, "search by user male or female");
};

module.exports = { getUsers, getUserByUuid, getUserSearchByGenderAndAge }