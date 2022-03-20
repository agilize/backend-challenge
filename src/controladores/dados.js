const knex = require('../conexao');
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const fs = require('fs');




const registroDados = async (req, res) => {
    (async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto("https://www.transparencia.gov.br/despesas/orgao?ordenarPor=orgaoSuperior&direcao=asc");
        const listDados = await page.evaluate(() => {
            const nodeList = document.querySelectorAll('#lista');
            const array = [...nodeList];
            const list = array.map(item => ({
                li: item.textContent,
            }))
            return list;
        });
        fs.writeFileSync('listaDeDados.json', JSON.stringify(listDados, null, 2), err => {
            if (err) throw new Error('algo deu errado');
        })
        await browser.close();
    })();
    try {
        await knex('dados_portal_transparencia').insert({
            mes_ano,
            programa_orcamentario,
            acao_orcamentaria,
            valor_empenhado,
            valor_liquidado,
            valor_pago,
            valor_restos_a_pagar_pagos,
        });


    } catch (error) {
        return res.status(404).json({ mensagem: error.message })
    }
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
