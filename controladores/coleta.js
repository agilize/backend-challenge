const url = 'https://www.transparencia.gov.br/despesas/orgao?ordenarPor=orgaoSuperior&direcao=asc';
const fs = require('fs/promises')


const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const data = await page.evaluate(() => {
        let lista = []
        var tr_list = document.querySelectorAll('tbody tr');
        var tr_array = [...tr_list];
        tr_array.forEach(tr => {
            const row = {
                mes_ano: tr.querySelector('td:nth-child(2) span').innerText,
                programa_orcamentario: tr.querySelector('td:nth-child(3) span').innerText,
                acao_orcamentaria: tr.querySelector('td:nth-child(4) span').innerText,
                valor_empenhado: tr.querySelector('td:nth-child(5) span').innerText,
                valor_liquidado: tr.querySelector('td:nth-child(6) span').innerText,
                valor_pago: tr.querySelector('td:nth-child(7) span').innerText,
                valor_restos_a_pagar_pagos: tr.querySelector('td:nth-child(8) span').innerText,
            }
            lista.push(row);
        });
        return lista
    });
    const dataStringfy = JSON.stringify(data)
    await fs.writeFile('./coleta.json', dataStringfy);

    await browser.close();
})()


