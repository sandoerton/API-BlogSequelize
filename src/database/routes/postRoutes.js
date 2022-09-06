const express = require('express');
const postController = require('../controllers/postController');
const tokenValidation = require('../middlewares/auth');

const postRoutes = express.Router();

postRoutes.get('/:id', tokenValidation, postController.findByPk);
postRoutes.get('/', tokenValidation, postController.findAll);
// postRoutes.post('/', tokenValidation, postController.create);

module.exports = postRoutes;
