const knex = require('../conexao');
const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://www.transparencia.gov.br/despesas/orgao?ordenarPor=orgaoSuperior&direcao=asc";

async function getDados() {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const list = [];
}


const listarDados = async (req, res) => {
    try {
        const data = await knex('dados_portal_transparencia');
        return res.status(200).json(data);

    } catch (error) {
        return res.status(404).json({ mensagem: error.message })
    }
}

module.exports = { listarDados }
