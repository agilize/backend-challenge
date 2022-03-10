const express = require('express');

const errorHandler = require('./middlewares/errorHandler');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(errorHandler);

app.listen(PORT, () => console.log(`App running on port ${PORT}!`));
