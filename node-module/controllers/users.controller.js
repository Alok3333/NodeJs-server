import axios from 'axios';

const getUsers = async (req, res) => {
    try {
        const { data: usersData } = await axios.get(`https://dummyjson.com/users`);
        if (usersData)
            return res.send(usersData.users);
        res.status(400).send({ message: "users data can't get" });
    } catch (err) { res.status(404).send({ message: "fetching data issue, check the endpoints" }) }
};

const getRoles = async (req, res) => {
    const { role } = req.query;
    try {
        const { data: usersData } = await axios.get(`https://dummyjson.com/users`);
        console.log(usersData);
        // if(usersData){
        //     const filterByRole = usersData.users.filter((userRole) => userRole.role === role);
        //     res.send(filterByRole);
        // }
    } catch (err) { res.status(404).send({ message: "must to be pass role of users" }) }
};

export { getUsers, getRoles }