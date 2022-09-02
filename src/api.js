const express = require('express');
const routes = require('./database/routes');

const app = express();

app.use(express.json());

app.use('/user', routes.userRoutes);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
