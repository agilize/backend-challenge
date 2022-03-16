const knex = require('../conexao');
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');



; (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.transparencia.gov.br/despesas/orgao?ordenarPor=orgaoSuperior&direcao=asc");
    let html = await page.content(html);
    const $ = await cheerio.load(html);
    const table = $('#lista').text();
    console.log(table);
    await browser.close();
})();


const listarDados = async (req, res) => {
    try {
        const data = await knex('dados_portal_transparencia');
        return res.status(200).json(data);

    } catch (error) {
        return res.status(404).json({ mensagem: error.message })
    }
}

module.exports = { listarDados }
