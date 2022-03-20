const express = require('express');
require('dotenv').config();
const { getInfosGovController } = require('./controllers/infosgovController');
const { createInfosGov } = require('./services/infosgovService');
const errorHandling = require('./utils/errorHandling');
const { badRequest } = require('./utils/dictionary');

const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 8090;

app.get('/api/dados', getInfosGovController);

app.listen(
  PORT,
  () => console.log(`App running on port ${PORT}!`),
  async () => {
      await createInfosGov().catch(() => {
        throw errorHandling(badRequest, 'Scrapping failed. Try restarting the server.');
      });
  }
);

app.use(errorHandler);

module.exports = app;
