const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.post('/new-user', UserController.registerNewUser);

module.exports = routes;