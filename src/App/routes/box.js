const express = require('express');

const route = express.Router();

const boxService = require('./../services/boxService');

route.get('/all', boxService.getAll);

route.get('/:idBox', boxService.getDetails);

route.post('/create', boxService.createBox);

route.delete('/remove/:idBox', boxService.removeBox);

module.exports = app => app.use('/v1/box', route);