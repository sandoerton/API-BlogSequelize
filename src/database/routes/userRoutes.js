const express = require('express');
const userController = require('../controllers/userController');
const tokenValidation = require('../middlewares/auth');
const validateUser = require('../middlewares/validations');

const userRoutes = express.Router();

userRoutes.get('/:id', tokenValidation, userController.findByPk);
userRoutes.get('/', tokenValidation, userController.findAll);
userRoutes.post('/', validateUser, userController.create);

module.exports = userRoutes;
