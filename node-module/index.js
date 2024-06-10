import express from 'express';
import { getUsers, getRoles } from './controllers/users.controller.js';

const server = express();
const PORT = 3002;

server.get("/", getUsers);

server.get("/users", getRoles);

server.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});