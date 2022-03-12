const express = require("express");
const puppeteer = require("puppeteer");

const url = "https://www.transparencia.gov.br/despesas/orgao?ordenarPor=orgaoSuperior&direcao=asc";
const searchFor = "";

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(url);

    const result = await page.$$eval('table tr', rows => {
        return Array.from(rows, row => {
            
            const mes = row.querySelectorAll('td:nth-child(2)');
            const programaOr = row.querySelectorAll('td:nth-child(3)');
            const acaoOR = row.querySelectorAll('td:nth-child(4)');
            const valorEm = row.querySelectorAll('td:nth-child(5)');
            const valorLi = row.querySelectorAll('td:nth-child(6)');
            const valorPa = row.querySelectorAll('td:nth-child(7)');
            const valorRe = row.querySelectorAll('td:nth-child(8)');

          let mesano = Array.from(mes, column => column.innerText).toString().trim();
          let programa_orcamentario = Array.from(programaOr, column => column.innerText).toString().trim();
          let acao_orcamentaria = Array.from(acaoOR, column => column.innerText).toString().trim();
          let valor_empenhado = Array.from(valorEm, column => column.innerText).toString().trim();
          let valor_liquidado = Array.from(valorLi, column => column.innerText).toString().trim();
          let valor_pago = Array.from(valorPa, column => column.innerText).toString().trim();
          let valor_restos_a_pagar_pagos = Array.from(valorRe, column => column.innerText).toString().trim();

          const obj = {
              mesano, 
              programa_orcamentario, 
              acao_orcamentaria, 
              valor_empenhado, 
              valor_liquidado, 
              valor_pago, 
              valor_restos_a_pagar_pagos
            };

          return obj

            
        });
    });



    console.log(result)
    await page.waitForTimeout(3000);

    await browser.close();
})();