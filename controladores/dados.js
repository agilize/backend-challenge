const conexao = require('../conexao')
const fs = require('fs/promises')

const banco = async (req, res) => {
    const parseER = JSON.parse(await fs.readFile('./controladores/coleta.json'));

    parseER.forEach(async element => {
        try {
            const query = `insert into portal_transparencia (mes_ano,
                orgao_superior,
                orgao_entidade,
                valor_empenhado,
                valor_liquidado,
                valor_pago,
                valor_restos_a_pagar_pagos
                ) values($1, $2, $3, $4, $5, $6, $7)`

            const insert = await conexao.query(query, [element.mes_ano, element.programa_orcamentario, element.acao_orcamentaria, element.valor_empenhado, element.valor_liquidado, element.valor_pago, element.valor_restos_a_pagar_pagos]);
            return res.status(200).json(console.log(parseER))
        } catch (error) {
            return res.status(400).json(error.message)
        }
    });
}

const listar = async (req, res) => {
    try {
        const { rows: lista } = await conexao.query('select * from portal_transparencia');

        return res.status(200).json(lista);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}



module.exports = {
    banco,
    listar
}