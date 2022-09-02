const express = require('express');
const userController = require('../controllers/userController');
// const tokenValidation = require('../middlewares/auth');

const userRoutes = express.Router();

userRoutes.get('/', userController.findAll);

module.exports = userRoutes;
