const express = require('express');

const route = express.Router();
const userService = require('./../services/userService');

route.get('/', userService.getUsers);

module.exports = app => app.use('/v2/user', route);