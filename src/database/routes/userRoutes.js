const express = require('express');
const userController = require('../controllers/userController');
const validateUser = require('../middlewares/validations');

const userRoutes = express.Router();

userRoutes.get('/', userController.findAll);
userRoutes.post('/', validateUser, userController.create);

module.exports = userRoutes;
