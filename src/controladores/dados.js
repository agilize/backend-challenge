const knex = require('../conexao');

const listarDados = async (req, res) => {
    try {
        const data = await knex('dados_portal_transparencia');
        return res.status(200).json(data);

    } catch (error) {
        return res.status(404).json({ mensagem: error.message })
    }
}

module.exports = { listarDados }
