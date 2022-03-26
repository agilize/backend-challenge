const express = require('express');
const { banco, listar } = require('./controladores/dados')


const rotas = express();

rotas.post('/api/dados', banco);
rotas.get('/api/dados', listar);


module.exports = rotas;