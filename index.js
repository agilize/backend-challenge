const express = require('express');
const { getInfosGovController } = require('./controllers/infosgovController');

const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.get('/api/dados', getInfosGovController);

const PORT = process.env.PORT || 3000;

app.use(errorHandler);

app.listen(PORT, () => console.log(`App running on port ${PORT}!`));
