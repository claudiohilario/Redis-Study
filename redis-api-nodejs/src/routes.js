const express = require('express');
const routes = express.Router();

const redisController = require('./resources/redis/redisController');

routes.post('/redis', redisController.executeRedisAction);

module.exports = routes;