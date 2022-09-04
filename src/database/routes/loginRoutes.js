const express = require('express');
const loginController = require('../controllers/loginController');

const loginRoutes = express.Router();

loginRoutes.post('/', loginController.login);

module.exports = loginRoutes;
