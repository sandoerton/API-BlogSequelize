const express = require('express');
const categoryController = require('../controllers/categoryController');
const tokenValidation = require('../middlewares/auth');

const categoryRoutes = express.Router();

// categoryRoutes.get('/', tokenValidation, categoryController.findAll);
categoryRoutes.post('/', tokenValidation, categoryController.create);

module.exports = categoryRoutes;
