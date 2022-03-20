const express = require("express");
const puppeteer = require("puppeteer");
const knex = require("./bancodedados/conexao");


const app = express();
const rotas = express();
app.use(express.json());
app.use(rotas);

const url = "https://www.transparencia.gov.br/despesas/orgao?ordenarPor=orgaoSuperior&direcao=asc";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);




  const result = await page.$$eval('table tr', rows => {
    return Array.from(rows, row => {
      if (row == !['']) {

      }

      const mes = row.querySelectorAll('td:nth-child(2)');
      const programaOr = row.querySelectorAll('td:nth-child(3)');
      const acaoOR = row.querySelectorAll('td:nth-child(4)');
      const valorEm = row.querySelectorAll('td:nth-child(5)');
      const valorLi = row.querySelectorAll('td:nth-child(6)');
      const valorPa = row.querySelectorAll('td:nth-child(7)');
      const valorRe = row.querySelectorAll('td:nth-child(8)');

      let mes_ano = Array.from(mes, column => column.innerText).toString().trim();
      let programa_orcamentario = Array.from(programaOr, column => column.innerText).toString().trim();
      let acao_orcamentaria = Array.from(acaoOR, column => column.innerText).toString().trim();
      let valor_empenhado = Array.from(valorEm, column => column.innerText).toString().trim();;
      let valor_liquidado = Array.from(valorLi, column => column.innerText).toString().trim();
      let valor_pago = Array.from(valorPa, column => column.innerText).toString().trim();
      let valor_restos_a_pagar_pagos = Array.from(valorRe, column => column.innerText).toString().trim();

      const obj = {
        mes_ano,
        programa_orcamentario,
        acao_orcamentaria,
        valor_empenhado,
        valor_liquidado,
        valor_pago,
        valor_restos_a_pagar_pagos
      };

      return obj


    })
  });


  try {

    await knex.insert(result).into('despesas').then(data => {
      console.log(data);
    })
  }
  catch (error) {
    console.log("Erro ao salvar os dados")
  }

  await page.waitForTimeout(3000);

  await browser.close();
})();

const mostrardados = async (req, res) => {
  try {
    const showDados = await knex.select().from("despesas");
    return res.status(200).json(showDados);


  } catch (error) {
    return res.status(404).json({ mensagem: error.message })
  }
}


rotas.get('/api/dados', mostrardados);
app.listen(3000);