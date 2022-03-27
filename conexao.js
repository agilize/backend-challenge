const { } = require('pg');
const { Pool } = require('pg/lib');
const { param } = require('./rotas');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'desafio_agilize',
    password: 'LendarioCodador',
    port: 5432
})

const query = (text, param) => {
    return pool.query(text, param);
}







module.exports = {
    query
}

