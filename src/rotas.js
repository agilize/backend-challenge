const express = require('express');
const data = require('./controladores/dados');

const rotas = express();

rotas.get('/dados', data.listarDados);

module.exports = rotas;