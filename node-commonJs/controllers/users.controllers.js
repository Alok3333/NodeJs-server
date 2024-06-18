const axios = require("axios");
const { getQueryErrors } = require("../validators/users.validators");

const getUsers = async (req, res) => {
    try {
        const { data: usersData } = await axios.get(
            `https://gitlab.crio.do/public_content/node-js-sessions/-/raw/master/users.json`
        );
        res.send(usersData.data);
    } catch (error) {
        res.status(500).send({ message: "Something went wrong" });
    }
};

const getUserSearchByGenderAndAge = async (req, res) => {
    const { age, gender } = req.query;

    const error = getQueryErrors({ age, gender });
    // console.log(error.details[0].message);

    if (error) return res.status(422).json(error.details[0].message);

    const { data: usersData } = await axios.get(`https://gitlab.crio.do/public_content/node-js-sessions/-/raw/master/users.json`);

    if (age && gender) {
        return res.send(usersData.data.filter(user => user.dob.age === parseInt(age) && user.gender === gender));
    } else if (age) {
        return res.send(usersData.data.filter(user => user.dob.age === parseInt(age)));
    } else if (gender) {
        return res.send(usersData.data.filter(user => user.gender === gender));
    } else {
        return res.status(400).send({ message: "At least one query parameter: [age, gender] should be must passed!" })
    }

    //     if (!age && !gender) {
    //         return res.status(422).send({ message: "Missing Search Parameters, search using age and/or gender" });
    //     }

    //     if (!age)
    //         return res.status(400).send({ message: "Age must to be pass" });

    //     if (age) {
    //         if (isNaN(age))
    //             return res.status(422).send({ message: "Age parameter should be a number" });
    //     }

    //     if (age < 0 || age >= 100) {
    //         return res.status(422).send({ message: "Age out of bounds. It should be a number between 0 to 100" });
    //     }

    //     if (gender) {
    //         if (!["female", "male"].includes(gender)) {
    //             return res.status(422).send({ message: "Gender to search can either be 'male' or 'female'" });
    //         }
    //     }

    //     res.send(usersData.data.filter((user) => user.gender === gender && user.dob.age === parseInt(age)));
};

const getUserByUuid = async (req, res) => {
    const { uuid } = req.params;
    // console.log(uuid);
    try {
        const { data: usersData } = await axios.get(
            `https://gitlab.crio.do/public_content/node-js-sessions/-/raw/master/users.json`
        );
        if (uuid)
            return res.send(usersData.data.find((user) => user.login.uuid === uuid));
        res.status(400).send({ message: "Bad Request" });
    } catch (error) {
        res.status(500).send({ message: "server not responsed!" });
    }
};

module.exports = { getUsers, getUserSearchByGenderAndAge, getUserByUuid };
