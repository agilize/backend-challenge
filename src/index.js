const express = require("express");
const { ElementType } = require("htmlparser2");
const puppeteer = require("puppeteer");

const url = "https://www.transparencia.gov.br/despesas/orgao?ordenarPor=orgaoSuperior&direcao=asc";
const searchFor = "";

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(url);

    const result = await page.$$eval('table tr', rows => {
        return Array.from(rows, row => {
            
            const mes = row.querySelectorAll('td:nth-child(2)')
          let mesano = Array.from(mes, column => column.innerText).toString();
          const programaOr = row.querySelectorAll('td:nth-child(3)')
          let programa_orcamentario = Array.from(programaOr, column => column.innerText).toString();
          const acaoOR = row.querySelectorAll('td:nth-child(4)')
          let acao_orcamentaria = Array.from(acaoOR, column => column.innerText).toString();
          const valorEm = row.querySelectorAll('td:nth-child(5)')
          let valor_empenhado = Array.from(valorEm, column => column.innerText).toString();
          const valorLi = row.querySelectorAll('td:nth-child(6)')
          let valor_liquidado = Array.from(valorLi, column => column.innerText).toString();
          const valorPa = row.querySelectorAll('td:nth-child(7)')
          let valor_pago = Array.from(valorPa, column => column.innerText).toString();
          const valorRe = row.querySelectorAll('td:nth-child(8)')
          let valor_restos_a_pagar_pagos = Array.from(valorRe, column => column.innerText).toString();

          const obj = {mesano, programa_orcamentario, acao_orcamentaria, valor_empenhado, valor_liquidado, valor_pago, valor_restos_a_pagar_pagos}

          return obj
        //    const lista = list.map(nome => ({
        //        detalhe: nome,
        //        mes: nome,
        //        programaOr: nome,
        //        acao_orcamentaria: nome,
        //        valor_empenhado: nome,
        //        valorL: nome,
        //        valorP: nome,
        //        valorR: nome
        //    }) )

            return columns
            
        });
    });



    console.log(result)
    await page.waitForTimeout(3000);

    await browser.close();
})();