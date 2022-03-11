const express = require('express');
require('dotenv').config();
const { getInfosGovController } = require('./controllers/infosgovController');

const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 8090;

app.get('/api/dados', getInfosGovController);

app.use(errorHandler);

app.listen(PORT, () => console.log(`App running on port ${PORT}!`));